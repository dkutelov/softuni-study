def get_matrix():
    n = int(input())
    return [list(input()) for _ in range(n)]


def kills_other_knight(r, c, matrix):
    number_knights_killed = 0
    matrix_dimension = len(matrix)
    for row_move in range(-2,3):
        if row_move != 0:
            col_move = 1
            if abs(row_move) == 1:
                col_move = 2
            row_index = r + row_move
            col_index_left = c - col_move
            col_index_right = c + col_move

            if 0 <= row_index < matrix_dimension:
                if col_index_left >= 0 and matrix[row_index][col_index_left] == 'K':
                    number_knights_killed += 1
                if col_index_right < matrix_dimension and matrix[row_index][col_index_right] == 'K':
                    number_knights_killed += 1
    return number_knights_killed


def get_knights_kills(matrix):
    knights = []
    row_count = len(matrix)
    col_count = len(matrix[0])
    for r in range(row_count):
        for c in range(col_count):
            if matrix[r][c] == 'K':
                number_killed = kills_other_knight(r, c, matrix)
                if number_killed > 0:
                    knights.append([number_killed, r, c])
    return list(sorted(knights, key=lambda x: -x[0]))


def main(matrix):
    count = 0
    while True:
        best_killers = get_knights_kills(matrix)
        if not best_killers:
            print(count)
            break
        matrix[best_killers[0][1]][best_killers[0][2]] = '0'
        count += 1


matrix = get_matrix()
main(matrix)

# -- in class solution
row_count = int(input())
matrix = [list(input()) for _ in range(row_count)]
position = []
deleted_knights = 0


def get_damage(r,c,matrix):
    counter = 0
    if r - 2 >= 0 and c - 1 >= 0:
        if matrix[r - 2][c - 1] == 'K':
            counter += 1
    if r - 2 >= 0 and c + 1 < len(matrix):
        if matrix[r - 2][c + 1] == 'K':
            counter += 1
    if r - 1 >= 0 and c - 2 >= 0:
        if matrix[r - 1][c -2] == 'K':
            counter += 1
    if r - 1 >= 0 and c + 2 < len(matrix):
        if matrix[r - 1][c + 2] == 'K':
            counter += 1
    if r + 1 < len(matrix) and c - 2 >= 0:
        if matrix[r + 1][c - 2] == 'K':
            counter += 1
    if r + 1 < len(matrix) and c + 2 < len(matrix):
        if matrix[r + 1][c + 2] == 'K':
            counter += 1
    if r + 2 < len(matrix) and c - 1 >= 0:
        if matrix[r + 2][c - 1] == 'K':
            counter += 1
    if r + 2 < len(matrix) and c + 1 < len(matrix):
        if matrix[r + 2][c + 1] == 'K':
            counter += 1
    return counter


while True:
    max_damage = 0

    for r in range(row_count):
        for c in range(row_count):
            current = matrix[r][c]
            if current == "K":
                damage = get_damage(r,c,matrix)
                if damage > max_damage:
                    max_damage = damage
                    position = [r,c]
    if max_damage == 0:
        break
    row, col = position
    matrix[row][col] = "0"
    deleted_knights += 1
    max_damage = 0
    position = []

print(deleted_knights)



# new in class
def is_valid(pos, size):
    row = pos[0]
    col = pos[1]
    return 0 <= row < size and 0 <= col < size


def get_killed_knights(row, col, size, board):
    killed_knights = 0
    rows = [-2, -1, 1, 2, 2, 1, -1, -2]
    cols = [1, 2, 2, 1, -1, -2, -2, -1]
    for i in range(8):
        current_pos = [row + rows[i], col + cols[i]]
        if is_valid(current_pos, size) and board[current_pos[0]][current_pos[1]] == "K":
            killed_knights += 1
    return killed_knights


n = int(input())
board = []
total_kills = 0

for _ in range(n):
    board.append([x for x in input()])

while True:
    most_kills = 0
    to_kill = []

    for row in range(n):
        for col in range(n):
            if board[row][col] == "K":
                killed_knights = get_killed_knights(row, col, n, board)
                if killed_knights > most_kills:
                    most_kills = killed_knights
                    to_kill = [row, col]

    if most_kills == 0:
        break

    to_kill_row = to_kill[0]
    to_kill_col = to_kill[1]
    board[to_kill_row][to_kill_col] = "0"
    total_kills += 1

print(total_kills)