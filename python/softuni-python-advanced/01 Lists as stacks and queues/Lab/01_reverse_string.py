def solve(str):
    stack = []
    reversed_str = []

    for ch in str:
        stack.append(ch)

    while stack:
        reversed_str.append(stack.pop())

    return "".join(reversed_str)


print(solve(input()))