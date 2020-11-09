def read_matrix():
    (row_count, col_count) = map(int, input().split())
    return [input().split() for _ in range(row_count)]


def validate_command(tokens):
    return len(tokens) == 5 and tokens[0] == 'swap'


def validate_indexes(indexes, matrix):
    row_count, col_count = len(matrix), len(matrix[0])
    r1, c1, r2, c2 = indexes
    positive = r1 >= 0 and r2 >= 0 and c1 >= 0 and c2 >= 0
    max_row = r1 < row_count and r2 < row_count
    max_col = c1 < col_count and c2 < col_count
    return positive and max_row and max_col


def swap_and_print(indexes, matrix):
    r1, c1, r2, c2 = indexes
    matrix[r1][c1], matrix[r2][c2] = matrix[r2][c2], matrix[r1][c1]
    [print(" ".join(row)) for row in matrix]
    return matrix


def main(matrix):
    while True:
        command = input()
        if command == 'END':
            break
        tokens = command.split()
        if validate_command(tokens):
            indexes = list(map(int, tokens[1:]))
            if validate_indexes(indexes, matrix):
                matrix = swap_and_print(indexes, matrix)
                continue
        print("Invalid input!")


matrix = read_matrix()
main(matrix)