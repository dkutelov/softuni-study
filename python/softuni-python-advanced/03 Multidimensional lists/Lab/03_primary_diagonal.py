def read_matrix(cells_split):
    rows = int(input())
    return [list(map(int, input().split(cells_split))) for _ in range(rows)]


def get_primary_diagonal_sum(matrix):
    return sum([matrix[i][i] for i in range(len(matrix))])


matrix = read_matrix(' ')
print(get_primary_diagonal_sum(matrix))


