directions = {
    "up": (-1, 0),
    "right": (0, 1),
    "down": (1, 0),
    "left": (0, -1)
}


def is_valid(position, size):
    return 0 <= position[0] < size and 0 <= position[1] < size


def read_matrix_and_player_position():
    size = int(input())
    matrix = []
    player_pos =[]
    for row in range(size):
        line = [x for x in input()]
        for col in range(size):
            if line[col] == 'P':
                player_pos = [row, col]
        matrix.append(line)
    return matrix, player_pos


def read_commands():
    m = int(input())
    return [input() for _ in range(m)]


def make_move(player_position, direction_change, matrix, text):
    size = len(matrix)
    new_position = [player_position[0] + direction_change[0], player_position[1] + direction_change[1]]

    if is_valid(new_position, size):
        matrix[player_position[0]][player_position[1]] = '-'
        element = matrix[new_position[0]][new_position[1]]
        if element != '-':
            text.append(element)

        player_position = new_position
        matrix[player_position[0]][player_position[1]] = 'P'
    else:
        if text:
            text.pop()

    return player_position, matrix, text


def execute_commands(commands, matrix, player_position, initial_string):
    for command in commands:
        direction_change = directions[command]
        player_position, matrix, initial_string = make_move(player_position, direction_change, matrix, initial_string)
    return initial_string, matrix


def print_results(text, matrix):
    print("".join(text))
    [print("".join(row)) for row in matrix]


initial_string = [x for x in input()]
matrix, player_position = read_matrix_and_player_position()
commands = read_commands()
text, matrix = execute_commands(commands, matrix, player_position, initial_string)
print_results(text, matrix)
