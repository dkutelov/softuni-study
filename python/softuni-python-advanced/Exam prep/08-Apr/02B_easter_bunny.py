from sys import maxsize


def is_valid(row, col, matrix):
    row_in_range = 0 <= row < len(matrix)
    col_in_range = 0 <= col < len(matrix)
    return row_in_range and col_in_range


def get_eggs(starting_position, move):
    eggs = 0
    steps = []

    current_row, current_col = starting_position

    if not is_valid(current_row + move[0], current_col + move[1], matrix):
        return None, None

    while True:
        new_row = current_row + move[0]
        new_col = current_col + move[1]

        if is_valid(new_row, new_col, matrix):
            if matrix[new_row][new_col] == 'X':
                break
            else:
                eggs += int(matrix[new_row][new_col])
                steps.append((new_row, new_col))
                current_row, current_col = new_row, new_col
        else:
            break

    return eggs, steps


moves = [
    ['left', (0, -1)],
    ['right', (0, 1)],
    ['up', (-1, 0)],
    ['down', (1, 0)]
]

max_eggs = - maxsize
best_direction = ''
best_steps = []
number = int(input())
matrix = []
bunny_position = []

for i in range(number):
    row = input().split()
    matrix.append(row)
    if 'B' in row:
        bunny_position = [i, row.index('B')]

for move in moves:
    eggs, steps = get_eggs(bunny_position, move[1])

    if eggs is None:
        continue

    if eggs >= max_eggs:
        max_eggs = eggs
        best_direction = move[0]
        best_steps = steps[:]

print(best_direction)
for step in best_steps:
    print(f'[{step[0]}, {step[1]}]')
print(max_eggs)
