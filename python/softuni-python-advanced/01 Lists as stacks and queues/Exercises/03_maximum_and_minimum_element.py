n = int(input())
stack = []

for _ in range(n):
    numbers = [int(x) for x in input().split()]
    command = numbers[0]

    if command == 1:
        stack.append(numbers[1])

    if stack:
        if command == 2:
            stack.pop()
        if command == 3:
            print(max(stack))
        if command == 4:
            print(min(stack))

print(", ".join([str(x) for x in reversed(stack)]))