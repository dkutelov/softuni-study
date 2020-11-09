start, end = int(input()), int(input())


def is_valid(num):
    return any([num % x == 0 for x in range(2, 11)])


result = [num for num in range(start, end + 1) if is_valid(num)]
print(result)
