n = int(input())
field = []
plain_pos = []
targets_count = 0

directions = {
    "up": (-1, 0),
    "right": (0, 1),
    "down": (1, 0),
    "left": (0, -1)
}


def get_position(direction, step):
    return [el*step for el in directions[direction]]


def is_valid(position_change, plain_pos, n):
    new_row = plain_pos[0] + position_change[0]
    new_col = plain_pos[1] + position_change[1]
    return 0 <= new_row < n and 0 <= new_col < n


def is_free(position_change, plain_pos):
    new_row = plain_pos[0] + position_change[0]
    new_col = plain_pos[1] + position_change[1]
    return field[new_row][new_col] == '.'


def get_current_target():
    targets = 0
    for row in field:
        targets += row.count('t')
    return targets


for i in range(n):
    line = input().split()
    for j in range(n):
        if line[j] == "p":
            plain_pos = [i,j]
        elif line[j] == 't':
            targets_count += 1
    field.append(line)

m = int(input())

for _ in range(m):
    command = input().split()
    direction = command[1]
    step = int(command[2])
    position_change = get_position(direction, step)

    if command[0] == 'shoot':
        if is_valid(position_change, plain_pos, n):
            shoot_row = plain_pos[0] + position_change[0]
            shoot_col = plain_pos[1] + position_change[1]
            field[shoot_row][shoot_col] = 'x'

            if get_current_target() == 0:

                break
    elif command[0] == 'move':
        if is_valid(position_change, plain_pos, n) and is_free(position_change, plain_pos):
            field[plain_pos[0]][plain_pos[1]] = '.'
            plain_pos[0] += position_change[0]
            plain_pos[1] += position_change[1]
            field[plain_pos[0]][plain_pos[1]] = 'p'

if get_current_target() == 0:
    print(f'Mission accomplished! All {targets_count} targets destroyed.')
else:
    print(f'Mission failed! {get_current_target()} targets left.')

[print(" ".join(row)) for row in field]
