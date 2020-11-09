def solve(values):
    occurances = {}
    for val in values:
        occurances.setdefault(val, 0)
        occurances[val] += 1

    for number, count in occurances.items():
        print(f'{number} - {count} times')

values_strings = input().split()
values = [float(x) for x in values_strings]
solve(values)