def get_sum(*args):
    return sum(args)

tests = [
    [[1, 2], 3],
    [[0, 1], 1],
    [[9, 1], 10]
]

results = [get_sum(*args) == expected_result for args, expected_result in tests]
print(results)