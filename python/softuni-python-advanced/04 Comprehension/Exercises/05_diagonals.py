def read_matrix():
    n = int(input())
    return [list(map(int, input().split(', '))) for _ in range(n)]


def main(matrix):
    n = len(matrix)
    primary_diagonal = [matrix[i][i] for i in range(n)]
    second_diagonal = [matrix[i][n - i - 1]for i in range(n)]
    print(f'First diagonal: {", ".join(map(str, primary_diagonal))}. Sum: {sum(primary_diagonal)}')
    print(f'Second diagonal: {", ".join(map(str, second_diagonal))}. Sum: {sum(second_diagonal)}')


matrix = read_matrix()

# matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
main(matrix)