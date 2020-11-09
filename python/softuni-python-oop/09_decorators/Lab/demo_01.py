def execute_func(func, *args, **kwargs):
    print(f' --- Before {func.__name__} --- ')
    result = func(*args, **kwargs)
    print(f' --- After {func.__name__} --- ')
    return result


def choose_operation(operation):
    def sum_numbers(*args):
        return sum(args)

    def multiply_numbers(*args):
        result = 1
        for x in args:
            result *= x
        return result

    if operation == '+':
        return sum_numbers
    else:
        return multiply_numbers


execute_func(print, 'Hello')

operation_func = choose_operation('+')
res = operation_func(1, 2, 3)
print(res)

operation_func = choose_operation('*')
res = operation_func(5, 5)
print(res)

res = execute_func(choose_operation('+'), 11, 14)
print(res)