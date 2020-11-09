#1 2 3
#3 4 6
#7 8 9

# bomb 1:1
# 0:0, 0:1, 0:2 r - 1 c +-1 or same
# 1:0, bomb, 1:2 r same, c += 1
# 2:0, 2:1, 2:2 r + 1, c +-1 or same

# if minus can not be deducted furter
# if zero - can not explode again


def read_matrix():
    dimension = int(input())
    return [list(map(int, input().split())) for _ in range(dimension)]


def read_bomb_coordinates():
    return [map(int, c.split(',')) for c in input().split()]


def is_valid(row, col, size):
    return 0 <= row < size and 0 <= col < size


def explode_bomb(coordinates, matrix):
    row_index, col_index = coordinates
    bomb_power = matrix[row_index][col_index]
    if bomb_power > 0:
        for i in range(row_index - 1, row_index + 2):
            for j in range(col_index - 1, col_index + 2):
                if is_valid(i, j, len(matrix)) and matrix[i][j] > 0:
                    matrix[i][j] -= bomb_power
    return matrix


def print_matrix(matrix):
    alive = []
    for row in matrix:
        for cell in row:
            if cell > 0:
                alive.append(cell)
    print(f'Alive cells: {len(alive)}')
    print(f'Sum: {sum(alive)}')
    [print(" ".join(list(map(str, row)))) for row in matrix]


def main(coordinates, matrix):
    for coordinate in coordinates:
        matrix = explode_bomb(coordinate, matrix)

    print_matrix(matrix)


matrix = read_matrix()
# matrix = [[8, 3, 2, 5], [6, 4, 7, 9], [9, 9, 3, 6], [6, 8, 1, 2]]
coordinates = read_bomb_coordinates()
# coordinates = [[1, 2], [2, 1], [2, 0]]

main(coordinates,matrix)


# in class solution

# n = int(input())
# matrix = []
#
# for _ in range(n):
#     matrix.append([int(x) for x in input().split()])
#
# bomb_numbers = input().split()
#
#
# def is_valid(row, col, size):
#     return 0 <= row < size and 0 <= col < size
#
#
# def explode_bomb(row, col, size, matrix):
#     bomb = matrix[row][col]
#     for r in range(row - 1, row + 2):
#         for c in range(col - 1, col + 2):
#             if is_valid(r,c,size) and matrix[r][c] > 0:
#                 matrix[r][c] -= bomb
#
#
# for bomb in bomb_numbers:
#     tokens = [int(x) for x in bomb.split(',')]
#     bomb_row, bomb_col = tokens
#
#     if matrix[bomb_row][bomb_col] > 0:
#         explode_bomb(bomb_row, bomb_col, n, matrix)
#
# alive_cells_count = 0
# alive_cells_sum = 0
#
# for row in range(n):
#     for col in range(n):
#         number = matrix[row][col]
#         if number > 0:
#             alive_cells_count += 1
#             alive_cells_sum += number
#
# print(f"Alive cells: {alive_cells_count}")
# print(f"Sum: {alive_cells_sum}")
#
# for row in matrix:
#     print(" ".join([str(x) for x in row]))