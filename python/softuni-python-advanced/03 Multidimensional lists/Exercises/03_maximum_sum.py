def read_matrix():
    row_count, col_count = map(int, input().split(" "))
    return [list(map(int, input().split())) for _ in range(row_count)]


def get_best_sum(matrix):
    rows_count = len(matrix)
    cols_count = len(matrix[0])

    best_sum = None
    best_start = None

    for row in range(rows_count - 2):
        for col in range(cols_count - 2):
            current_sum = sum(sum(matrix[i][col:col + 3]) for i in range(row, row + 3))

            if best_sum:
                if best_sum < current_sum:
                    best_sum = current_sum
                    best_start = (row, col)
            else:
                best_sum = current_sum
                best_start = (row, col)

    if best_start:
        row, col = best_start
        best_square = [[matrix[i][j] for j in range(col, col + 3)] for i in range(row, row + 3)]
    else:
        best_square = matrix

    return best_sum, best_square


matrix = read_matrix()
best_sum, best_matrix = get_best_sum(matrix)

print(f"Sum = {best_sum}")
[print(" ".join(map(str, row))) for row in best_matrix]
