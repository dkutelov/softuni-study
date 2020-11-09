matrix_size = int(input())
matrix = [list(input()) for _ in range(matrix_size)]
game_over = False


def player_position(symbol, matrix):
    size = len(matrix)
    for i in range(size):
        for j in range(size):
            if matrix[i][j] == symbol:
                return i, j


def print_matrix(matrix):
    [print("".join(row)) for row in matrix]


def move_player(direction, r, c):
    current_direction = direction
    new_row, new_col = r, c
    if current_direction == 'up':
        new_row -= 1
        if new_row < 0:
            new_row = matrix_size - 1
    elif current_direction == 'down':
        new_row += 1
        if new_row == matrix_size:
            new_row = 0
    elif current_direction == 'right':
        new_col += 1
        if new_col == matrix_size:
            new_col = 0
    elif current_direction == 'left':
        new_col -= 1
        if new_col < 0:
            new_col = matrix_size - 1
    return new_row, new_col


row1, col1 = player_position('f', matrix)
row2, col2 = player_position('s', matrix)

while not game_over:
    commands = input().split()

    row1, col1 = move_player(commands[0], row1, col1)
    new_position = matrix[row1][col1]
    if new_position == 's':
        game_over = True
        matrix[row1][col1] = 'x'
        break
    matrix[row1][col1] = 'f'

    row2, col2 = move_player(commands[1], row2, col2)
    new_position = matrix[row2][col2]
    if new_position == 'f':
        game_over = True
        matrix[row2][col2] = 'x'
        break
    matrix[row2][col2] = 's'

print_matrix(matrix)
