n = 4
m = 3

# recommended way: [0] * 3 because it is more simple
matrix = [[0] * 3 for _ in range(n)]

print(matrix)

for i in range(len(matrix)):
    for j in range(len(matrix[i])):
        print(matrix[i][j], end=', ')
    print()

print('*' * 30)
[[print(value, end=", ") for value in row] for row in matrix]
print()

print('*' * 30)
[[print(matrix[i][j], end=", ") for j in range(len(matrix[i]))] for i in range(len(matrix))]

square_matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 29],
    [21, 22, 23, 24, 25]
]


def secondary_diagonal(matrix):
    n = len(matrix)
    diagonal_sum = 0
    for i in range(n):
        diagonal_sum += matrix[i][n - i - 1]
    print(diagonal_sum)

print()
print('*' * 30)
secondary_diagonal(square_matrix)


print()
print('*' * 30)


def sum_below_primary_diagonal(matrix):
    n = len(matrix)
    sum_below_primary_diagonal = 0
    for row in range(n):
        for col in range(row + 1):
            sum_below_primary_diagonal += matrix[row][col]
    return sum_below_primary_diagonal


print(sum_below_primary_diagonal(square_matrix))

print()
print('*' * 30)

def sum_below_secondary_diagonal(matrix):
    n = len(matrix)
    # r = 0, c = n - 1
    sum_below_secondary_diagonal = 0
    for row in range(n):
        for col in range(n - row - 1, n):
            sum_below_secondary_diagonal += matrix[row][col]
    return sum_below_secondary_diagonal


print(sum_below_secondary_diagonal(square_matrix))