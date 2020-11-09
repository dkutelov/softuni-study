# 1
def read_matrix():
    rows, columns = map(int, input().split(', '))
    return [list(map(int, input().split(' '))) for _ in range(rows)]


def sum_matrix_columns(matrix):
    columns = len(matrix[0])
    for column in range(columns):
        print(sum([row[column] for row in matrix]))


matrix = read_matrix()
sum_matrix_columns(matrix)


# 2
def read_matrix(cells_split):
    rows, columns = map(int, input().split(', '))
    return [list(map(int, input().split(cells_split))) for _ in range(rows)]


def get_column_sums(matrix):
    rows_count: int = len(matrix)
    columns_count: int = len(matrix[0])
    column_sums = [0] * columns_count
    for row in range(rows_count):
        for col in range(columns_count):
            column_sums[col] += matrix[row][col]
    return column_sums


matrix = read_matrix(' ')
[print(column_sum) for column_sum in get_column_sums(matrix)]