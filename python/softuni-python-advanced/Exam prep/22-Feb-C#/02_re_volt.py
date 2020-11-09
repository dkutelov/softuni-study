matrix_size = int(input())
commands_count = int(input())
matrix = [list(input()) for _ in range(matrix_size)]
win_game = False


def f_position(matrix):
    size = len(matrix)
    for i in range(size):
        for j in range(size):
            if matrix[i][j] == 'f':
                return i, j


def get_new_position(current_direction, r, c):
    new_row, new_col = r, c
    if current_direction == 'up':
        new_row -= 1
    elif current_direction == 'down':
        new_row += 1
    elif current_direction == 'right':
        new_col += 1
    elif current_direction == 'left':
        new_col -= 1
    new_row = new_row % matrix_size
    new_col = new_col % matrix_size
    return new_row, new_col


row, col = f_position(matrix)

for _ in range(commands_count):
    direction = input()
    current_row, current_col = row, col
    matrix[row][col] = '-'
    row, col = get_new_position(direction, row, col)
    new_cell = matrix[row][col]

    if new_cell == 'F':
        win_game = True

    elif new_cell == '-':
        matrix[row][col] = 'f'

    elif new_cell == 'B':
        row, col = get_new_position(direction, row, col)
        if matrix[row][col] == 'F':
            win_game = True

        matrix[row][col] = 'f'

    elif new_cell == 'T':
        row, col = current_row, current_col

    if win_game:
        print('Player won!')
        matrix[row][col] = 'f'
        break

if not win_game:
    print(f'Player lost!')
[print("".join(map(str, row))) for row in matrix]
