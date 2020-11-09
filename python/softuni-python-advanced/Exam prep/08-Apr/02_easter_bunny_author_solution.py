number = int(input())
matrix = []
start_position = []

directions = {
    'left': [0, -1],
    'right': [0, 1],
    'up': [-1, 0],
    'down': [1, 0]
}

eggs_collected = {
    'left': 0,
    'right': 0,
    'up': 0,
    'down': 0
}

eggs_positions = {
    'left': [],
    'right': [],
    'up': [],
    'down': []
}

for i in range(number):
    row = input().split()
    matrix.append(row)
    if 'B' in row:
        start_position = [i, row.index('B')]

for key in directions:
    if directions[key]:
        bunny_position = start_position
        while True:
            next_position = [bunny_position[0] + directions[key][0], bunny_position[1] + directions[key][1]]
            if 0 <= next_position[0] < len(matrix) and 0 <= next_position[1] < len(matrix):
                bunny_position = next_position
                if matrix[next_position[0]][next_position[1]] == 'X':
                    directions[key].clear()
                    break
                else:
                    eggs_collected[key] += int(matrix[next_position[0]][next_position[1]])
                    eggs_positions[key].append(next_position)
            else:
                directions[key].clear()
                break

for key in eggs_positions:
    if not eggs_positions[key]:
        del eggs_collected[key]

best_direction = max(eggs_collected, key=lambda k: eggs_collected[k])
print(best_direction)
[print(position) for position in eggs_positions[best_direction]]
print(eggs_collected[best_direction])