player_position = []
game_over = False
moves = {
    'U': [-1, 0],
    'D': [1, 0],
    'L': [0, -1],
    'R': [0, 1]
}

# inputs
n, m = map(int, input().split(" "))
matrix = [['.'] * m for _ in range(n)]
for i in range(n):
    text_row = input()
    for j in range(m):
        current_char = text_row[j]
        if current_char == 'P':
            player_position = [i,j]
        matrix[i][j] = current_char
move_commands = [letter for letter in input()]

for move in move_commands:

    if game_over:
        break

    step_row, step_col = moves[move]
    current_row, current_col = player_position
    r, c = current_row + step_row, current_col + step_col

    if r < 0:
        game_over = 'won'
        r = 0
    elif r == n:
        game_over = 'won'
        r = n - 1

    if c < 0:
        game_over = 'won'
        c = 0
    elif c == m:
        game_over = 'won'
        c = m - 1
    matrix[current_row][current_col] = '.'

    if matrix[r][c] == 'B':
        game_over = 'dead'

    for row_index in range(n):
        for col_index in range(m):
            if matrix[row_index][col_index] == 'B':
                if row_index > 0 and matrix[row_index - 1][col_index] != 'B':
                    matrix[row_index - 1][col_index] = '*'
                if row_index < n - 1 and matrix[row_index + 1][col_index] != 'B':
                    matrix[row_index + 1][col_index] = '*'
                if col_index > 0 and matrix[row_index][col_index - 1] != 'B':
                    matrix[row_index][col_index - 1] = '*'
                if col_index < m - 1 and matrix[row_index][col_index + 1] != 'B':
                    matrix[row_index][col_index + 1] = '*'

    for i in range(n):
        for j in range(m):
            if matrix[i][j] == '*':
                matrix[i][j] = 'B'

    if not game_over and matrix[r][c] == 'B':
        game_over = 'dead'
    player_position = [r, c]


[print("".join(row)) for row in matrix]
print(f'{game_over}: {player_position[0]} {player_position[1]}')

