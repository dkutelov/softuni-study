def read_matrix(cells_split):
    rows, columns = map(int, input().split(' '))
    return [list(input().split(cells_split)) for _ in range(rows)]


def is_equal_square(indexes, matrix):
    i, j = indexes
    return matrix[i][j] == matrix[i+1][j] == matrix[i][j+1] == matrix[i+1][j+1]


def get_number_of_equal_squares(matrix):
    count = 0
    for i in range(len(matrix) - 1):
        for j in range(len(matrix[0]) - 1):
            if is_equal_square((i, j), matrix):
                count += 1
    return count


matrix = read_matrix(' ')
num = get_number_of_equal_squares(matrix)
print(num)
