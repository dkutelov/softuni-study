def read_matrix(cells_split):
    rows = int(input())
    return [list(map(int, input().split(cells_split))) for _ in range(rows)]


def get_primary_diagonal_sum(matrix):
    matrix_size = len(matrix)
    return sum(matrix[i][i] for i in range(matrix_size))


def get_secondary_diagonal_sum(matrix):
    matrix_size = len(matrix)
    return sum(matrix[i][matrix_size - i - 1] for i in range(matrix_size))


def solve(matrix):
    primary_diagonal_sum = get_primary_diagonal_sum(matrix)
    secondary_diagonal_sum = get_secondary_diagonal_sum(matrix)
    difference = abs(primary_diagonal_sum  - secondary_diagonal_sum)
    print(difference)


matrix = read_matrix(' ')
solve(matrix)