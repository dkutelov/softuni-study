def read_input():
    text = input()
    n = int(input())
    return text, n


def solve():
    try:
        text, times = read_input()
    except ValueError:
        return "Variable times must be an integer"
    return text * times


print(solve())
