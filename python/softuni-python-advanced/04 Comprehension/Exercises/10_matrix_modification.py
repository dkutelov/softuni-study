def read_matrix():
    n = int(input())
    return [list(map(int, input().split())) for _ in range(n)]


matrix = read_matrix()

while True:
    tokens = input().split()

    if tokens[0] == 'END':
        break

    command = tokens[0]
    i, j, value = list(map(int, tokens[1:]))

    n = len(matrix)
    if i < 0 or j < 0 or i >= n or j >= n:
        print('Invalid coordinates')
        continue

    if command == 'Add':
        matrix[i][j] += value
    elif command == 'Subtract':
        matrix[i][j] -= value

[print(" ".join(map(str, row))) for row in matrix]