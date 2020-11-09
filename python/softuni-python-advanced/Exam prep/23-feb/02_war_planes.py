def read_battle_field():
    size = int(input())
    return [input().split()for _ in range(size)]


def read_commands():
    n = int(input())
    return [input().split() for _ in range(n)]


def print_field(field):
    [print(" ".join(row)) for row in field]


def get_plain_position(field):
    p = []
    target_count = 0
    size = len(field)
    for i in range(size):
        for j in range(size):
            if field[i][j] == 't':
                target_count += 1
            elif field[i][j] == 'p':
                p = [i,j]
    return p, target_count


def main(field, commands):
    target_count = 0
    size = len(field)
    plain_position = []
    for i in range(size):
        for j in range(size):
            if field[i][j] == 't':
                target_count += 1
            elif field[i][j] == 'p':
                plain_position = [i, j]

    for command in commands:
        command_name, direction, steps = command

        if command_name == 'shoot':
            steps = int(steps)
            if direction == 'down':
                y = plain_position[1] + steps
                if y < size and field[plain_position[0], y]:
                    pass
        elif command_name == 'move':
            pass

#field = read_battle_field()
field = [['.', '.', 'p', '.'], ['.', '.', '.', '.'], ['.', '.', 't', '.'], ['t', '.', '.', '.']]

#commands = read_commands()
commands = [['shoot', 'down', '2'], ['move', 'down', '2'], ['move', 'left', '2'], ['shoot', 'down', '3']]

main(field, commands)

