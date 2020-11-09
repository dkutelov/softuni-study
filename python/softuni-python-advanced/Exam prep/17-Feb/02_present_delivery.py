directions = {
    "up": (-1, 0),
    "right": (0, 1),
    "down": (1, 0),
    "left": (0, -1)
}


def read_matrix_and_santa_position():
    size = int(input())
    matrix = []
    santa_pos =[]
    for row in range(size):
        line = input().split()
        for col in range(size):
            if line[col] == 'S':
                santa_pos = [row, col]
        matrix.append(line)
    return santa_pos, matrix


def is_valid(position, size):
    return 0 <= position[0] < size and 0 <= position[1] < size


def number_nice_kids(neighborhood):
    nice_kids = 0
    n = len(neighborhood)
    for row in range(n):
        for col in range(n):
            if neighborhood[row][col] == 'V':
                nice_kids += 1
    return nice_kids


def print_results(neighborhood, total_nice_kids):
    [print(" ".join(row)) for row in neighborhood]
    nice_kids = number_nice_kids(neighborhood)
    if nice_kids > 0:
        print(f'No presents for {nice_kids} nice kid/s.')
    else:
        print(f'Good job, Santa! {total_nice_kids} happy nice kid/s.')


def santa_eats_cookie(x,y, neighborhood, number_presents):
    for gift_direction in directions:
        gift_direction_change = directions[gift_direction]
        gift_pos = [x + gift_direction_change[0], y + gift_direction_change[1]]

        if is_valid(gift_pos, len(neighborhood)) and number_presents > 0 and \
                neighborhood[gift_pos[0]][gift_pos[1]] in 'VCX':
            number_presents -= 1
            neighborhood[gift_pos[0]][gift_pos[1]] = '-'
    return number_presents


number_presents = int(input())
s_pos, neighborhood = read_matrix_and_santa_position()
total_nice_kids = number_nice_kids(neighborhood)

while True:
    command = input()

    if command == 'Christmas morning' or number_presents == 0:
        break

    direction = command
    direction_change = directions[direction]
    new_position = [s_pos[0] + direction_change[0], s_pos[1] + direction_change[1]]

    if is_valid(new_position, len(neighborhood)):

        x, y = new_position
        new_field = neighborhood[x][y]
        neighborhood[s_pos[0]][s_pos[1]] = '-'

        if new_field == 'V':
            number_presents -= 1

        elif new_field == 'C':
            number_presents = santa_eats_cookie(x, y, neighborhood, number_presents)

        neighborhood[x][y] = 'S'

        if number_presents == 0 and number_nice_kids(neighborhood):
            print('Santa ran out of presents!')
            break

        if not number_nice_kids(neighborhood):
            break

        s_pos = [x, y]


print_results(neighborhood, total_nice_kids)