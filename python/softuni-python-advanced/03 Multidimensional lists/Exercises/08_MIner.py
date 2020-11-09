def get_matrix_and_commands():
    n = int(input())
    move_commands = input().split()
    matrix = [input().split() for _ in range(n)]
    return move_commands, matrix


def get_index(symbol, matrix):
    row_index, col_index = 0, 0
    matrix_size = len(matrix)
    for i in range(matrix_size):
        for j in range(matrix_size):
            if matrix[i][j] == symbol:
                row_index, col_index = i, j
    return row_index, col_index


def get_coal_number(matrix):
    matrix_size = len(matrix)
    return len([matrix[i][j] for j in range(matrix_size) for i in range(matrix_size) if matrix[i][j] == 'c'])


def get_new_position(step, current_position, matrix):
    r, c = step
    current_row, current_col = current_position
    new_row = current_row + r
    new_col = current_col + c
    if 0 <= new_row < len(matrix):
        current_row = new_row
    if 0 <= new_col < len(matrix):
        current_col = new_col
    return current_row, current_col


def main(commands, matrix):
    is_Interupted = False
    numCoal = get_coal_number(matrix)
    current_row, current_col = get_index('s', matrix)
    MOVEMENT = {
       'up': (-1,0),
       'left': (0, -1),
       'right': (0, 1),
       'down': (1, 0)
    }
    for command in commands:
        current_row, current_col = get_new_position(MOVEMENT[command], (current_row, current_col), matrix)
        current_cell = matrix[current_row][current_col]
        if current_cell == 'e':
            print(f'Game over! ({current_row}, {current_col})')
            is_Interupted = True
            break
        elif current_cell == 'c' and numCoal > 1:
            numCoal -= 1
            matrix[current_row][current_col] = '*'
        elif current_cell == 'c' and numCoal == 1:
            print(f'You collected all coals! ({current_row}, {current_col})')
            is_Interupted = True
            break
        elif current_cell == 'e':
            print(f'Game over! ({current_row}, {current_col})')
    if not is_Interupted:
        print(f'{numCoal} coals left. ({current_row}, {current_col})')


move_commands, matrix = get_matrix_and_commands()
# move_commands = ['up', 'right', 'right', 'up', 'right']
# matrix = [['*', '*', '*', 'c', '*'], ['*', '*', '*', 'e', '*'], ['*', '*', 'c', '*', '*'], ['s', '*', '*', 'c', '*'], ['*', '*', 'c', '*', '*']]

main(move_commands, matrix)