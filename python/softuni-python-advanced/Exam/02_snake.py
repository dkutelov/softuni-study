n = int(input())

field = [[0] * n for _ in range(n)]
food = 0
snake_pos = [0,0]
burrows_pos = []

for i in range(n):
    row = list(input())
    for j in range(n):
        current_element = row[j]
        field[i][j] = current_element
        if current_element == 'S':
            snake_pos = [i, j]
        elif current_element == 'B':
            burrow_pos = [i, j]
            burrows_pos.append(burrow_pos)

while True:
    command = input()
    field[snake_pos[0]][snake_pos[1]] = '.'

    if command == 'up':
        snake_pos[0] -= 1
    elif command == 'down':
        snake_pos[0] += 1
    elif command == 'left':
        snake_pos[1] -= 1
    elif command == 'right':
        snake_pos[1] += 1

    row, col = snake_pos

    if row < 0 or row > n - 1 or col < 0 or col > n - 1:
        print('Game over!')
        break

    if field[row][col] == '*':
        food += 1
        if food == 10:
            field[row][col] = 'S'
            print('You won! You fed the snake.')
            break

    if field[row][col] == 'B':
        field[row][col] = '.'
        for burrow in burrows_pos:
            if row != burrow[0] and col != burrow[1]:
                snake_pos = burrow[:]

print(f'Food eaten: {food}')
[print("".join(r)) for r in field]
