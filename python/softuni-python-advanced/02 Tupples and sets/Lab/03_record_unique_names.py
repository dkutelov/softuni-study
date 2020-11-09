def get_unique_names(n):
    unique_names = {input() for _ in range(n)}
    [print(name) for name in unique_names]


n = int(input())
get_unique_names(n)

