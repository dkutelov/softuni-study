def read_matrix():
    rows = int(input())
    return [list(map(int, input().split(', '))) for _ in range(rows)]


matrix = read_matrix()
even_matrix = [[num for num in row if num % 2 == 0] for row in matrix]
print(even_matrix)
