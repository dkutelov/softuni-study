def solve(n):
    numbers = []
    for _ in range(n):
        tokens = input().split()
        command = int(tokens[0])

        if command == 1:
            num = int(tokens[1])
            numbers.append(num)
        elif command == 2:
            if numbers:
                numbers.pop()
        elif command == 3:
            if numbers:
                print(max(numbers))
        elif command == 4:
            if numbers:
                print(min(numbers))

    print(", ".join(reversed([str(x) for x in numbers])))


solve(int(input()))
