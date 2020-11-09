# Time: 0.118 s
from collections import deque

n, m = map(int, input().split())
snake = deque(input())

grid = [[0] * m for _ in range(n)]
row_count = len(grid)
column_count = len(grid[0])


for r in range(n):
    if r % 2 != 0:
        for c in range(m-1, -1, -1):
            char = snake.popleft()
            grid[r][c] = char
            snake.append(char)
        continue

    for c in range(0, m):
        char = snake.popleft()
        grid[r][c] = char
        snake.append(char)

[print("".join(row)) for row in grid]


# Time: 0.078 s
n, m = map(int, input().split())
snake = input()

total_len = n * m
repeat = total_len // len(snake) + 1
snake = snake * int(repeat)
snake = snake[0:total_len]

matrix = []
for r in range(n):
    start = r * m
    current_snake = snake[start:start + m]
    if r % 2 != 0:
        current_snake = current_snake[::-1]
    matrix.append(current_snake)

[print(row) for row in matrix]