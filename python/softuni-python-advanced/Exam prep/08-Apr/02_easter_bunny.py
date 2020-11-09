def read_matrix():
    n = int(input())
    return [input().split() for _ in range(n)]


def get_bunny_position(matrix):
    """ Returns bunny position and turns to numbers all eggs numbers"""
    bunny_pos = []
    size = len(matrix)
    for i in range(size):
        for j in range(size):
            if matrix[i][j].upper() == 'B':
                bunny_pos = [i,j]
            elif matrix[i][j].upper() == 'X':
                pass
            else:
                matrix[i][j] = int(matrix[i][j])
    return bunny_pos


def is_valid(row, col, matrix):
    row_in_range = 0 <= row < len(matrix)
    col_in_range = 0 <= col < len(matrix)
    return row_in_range and col_in_range and matrix[row][col] != 'X'


def get_eggs(starting_position, move):
    eggs = 0
    steps = []

    current_row, current_col = starting_position

    if not is_valid(current_row + move[0], current_col + move[1], matrix):
        return None, None

    while True:
        new_row = current_row + move[0]
        new_col = current_col + move[1]

        if not is_valid(new_row, new_col, matrix):
            break

        eggs += matrix[new_row][new_col]
        steps.append((new_row, new_col))
        current_row, current_col = new_row, new_col

    return eggs, steps


moves = {
    'up': (-1, 0),
    'right': (0, 1),
    'down': (1, 0),
    'left': (0, -1)
}
collected_eggs = {}

matrix = read_matrix()
bunny_position = get_bunny_position(matrix)

for move in moves:
    eggs, steps = get_eggs(bunny_position, moves[move])

    if eggs is None:
        continue

    collected_eggs[move] = {
        'eggs': eggs,
        'steps': steps
    }

highest_result = max(collected_eggs.items(), key=lambda x: x[1]['eggs'])
print(highest_result[0])
for step in highest_result[1]['steps']:
    print(f'[{step[0]}, {step[1]}]')
print(highest_result[1]['eggs'])