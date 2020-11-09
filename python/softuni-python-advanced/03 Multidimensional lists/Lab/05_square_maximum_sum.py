def read_matrix(cells_split):
    rows, columns = map(int, input().split(', '))
    return [list(map(int, input().split(cells_split))) for _ in range(rows)]


def get_max_square(matrix):
    rows = len(matrix) - 1
    cols = len(matrix[0]) - 1
    max_sum = 0
    max_sum_nums = []

    for r in range(rows):
        for c in range(cols):
            # move to separate function
            m1, m2, m3, m4 = matrix[r][c],  matrix[r][c + 1], matrix[r + 1][c], matrix[r + 1][c + 1]
            square_sum = m1 + m2 + m3 + m4
            if square_sum > max_sum:
                max_sum = square_sum
                max_sum_nums = [m1, m2, m3, m4]
    return max_sum, max_sum_nums


matrix = read_matrix(', ')
max_sum, max_sum_nums = get_max_square(matrix)
print(" ".join(str(el) for el in max_sum_nums[:2]))
print(" ".join(str(el) for el in max_sum_nums[2:4]))
print(max_sum)





