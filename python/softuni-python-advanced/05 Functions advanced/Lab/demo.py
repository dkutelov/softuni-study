# order -> (positinal_args, *args, **kwargs)


def my_sum(*args):
    the_sum = 0
    for n in args:
        the_sum += n
    return the_sum


def f(*args):
    print(args) # args is a tuple

f(1,2,3,4,5,6)


def f1(*args):
    current_min  = args[0]

    for x in args:
        if x < current_min:
            current_min = x
    print(current_min)

f1(7,2,3,4,5,6)


def f2(*args):
    print(args) # empty tuple

f2()


def f_kwargs(**kwargs):
    print(kwargs.get('name'))


f_kwargs(name='Dari', age=51)

person = {
    'name': 'Andy',
    'age': 11
}

f_kwargs(**person)


def get_min(x, *args):
    current_min = x
    for el in args:
        if el < current_min:
            current_min = el
    return current_min


print(get_min(1, 2, 3, -4, -2, 12, -1))


def get_mixed(*args, **kwargs): # should be in this order
    print(args)
    print(kwargs)


get_mixed(3, name="Ivancho", age='boy')


# args and kwargs - we can provide nothing and will not error

# Recursion

def binary_search(values, target):
    if not values:
        return False
    if len(values) == 1:
        return values[0] == target
    mid = len(values) // 2
    if values[mid] == target:
        return True
    elif values[mid] < target:
        return binary_search(values[mid:], target)
    elif values[mid] > target:
        return binary_search(values[:mid], target)


print(binary_search([1, 2, 3, 4, 6, 10, 11, 12, 14, 15], 11))
print(binary_search([1, 2, 3, 4, 6, 10, 11, 12, 14, 15], 111))


#
def find_count(numbers, target):
    if not numbers:
        if target == 0:
            return 1
        else:
            return 0
    result = 0
    result += find_count(numbers[1:], target - numbers[0])
    result += find_count(numbers[1:], target + numbers[0])
    return result


print(find_count([1, 2, 1, 2], 4))


# Factoriel

def factorial_recursive(n):
    # Base case: 1! = 1
    if n == 1:
        return 1

    # Recursive case: n! = n * (n-1)!
    else:
        return n * factorial_recursive(n-1)


print(factorial_recursive(5))


def fibonacci(n):
    if n == 0:
        return 0
    if n == 1:
        return 1

    return fibonacci(n - 1) + fibonacci(n - 2)


print(fibonacci(20))


# sum numbers with plus and minus
def expressions(numbers, current_result, expression=''):
    if not numbers:
        return expression, current_result

    result_plus = expressions(numbers[1:], current_result + numbers[0], f'{expression}+{numbers[0]}')
    result_minus = expressions(numbers[1:], current_result - numbers[0], f'{expression}+{numbers[0]}')
    return result_plus + result_minus


result = expressions([1, 1, 1], 0)