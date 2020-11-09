def multiply(*args):
    result = 1
    for x in args:
        result *= x
    return result


numbers = [1, 4, 5]
print(multiply(*numbers))

