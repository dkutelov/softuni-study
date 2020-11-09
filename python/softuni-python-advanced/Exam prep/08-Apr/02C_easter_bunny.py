# solution from exam prep exercise
from sys import maxsize
n = int(input())
matrix = []
bunny_position = None
directions = {
    "up": (-1, 0),
    "right": (0, 1),
    "down": (1, 0),
    "left": (0, -1)
}
best_sum = - maxsize
best_dir = None


def is_valid(idx, size):
    return 0 <= idx < size


for row in range(n):
    line = input().split()
    if 'B' in line:
        bunny_position = (row, line.index("B"))
    matrix.append(line)

for direction in directions:
    current_sum = 0
    row = bunny_position[0]
    col = bunny_position[1]

    row_change = directions[direction][0]
    col_change = directions[direction][1]

    if not is_valid(row + row_change, n) or not is_valid(col + col_change, n):
        continue

    while is_valid(row, n) and is_valid(col, n):
        current_cell = matrix[row][col]
        if current_cell != 'B' and current_cell != 'X':
            current_sum += int(current_cell)
        elif current_cell == 'X':
            break

        row += row_change
        col += col_change

    if current_sum > best_sum:
        best_sum = current_sum
        best_dir = direction

row = bunny_position[0] + directions[best_dir][0]
col = bunny_position[1] + directions[best_dir][1]

print(best_dir)
while is_valid(row, n) and is_valid(col, n):
    if matrix[row][col] == 'X':
        break
    print([row, col])
    row += directions[best_dir][0]
    col += directions[best_dir][1]
print(best_sum)

