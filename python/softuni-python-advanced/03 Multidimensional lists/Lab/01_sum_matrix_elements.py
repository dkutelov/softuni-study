# def sum_matrix(matrix):
#     matrix_sum = 0
#     rows_count = len(matrix)
#     cols_count = len(matrix[0])
#
#     for row in range(rows_count):
#         for col in range(cols_count):
#             matrix_sum += matrix[row][col]
#     return matrix_sum


def read_matrix():
    rows, columns = map(int, input().split(', '))
    return [[int(el) for el in input().split(', ')] for _ in range(rows)]
    #return [list(map(int, input().split(', '))) for _ in range(rows)]


def sum_matrix(matrix):
    return sum([sum(row) for row in matrix])


matrix = read_matrix()
matrix_sum = sum_matrix(matrix)

print(matrix_sum)
print(matrix)