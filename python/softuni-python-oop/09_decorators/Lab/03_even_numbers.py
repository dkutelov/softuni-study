def even_numbers(function):
    def wrapper(numbers):
        res = [x for x in numbers if x % 2 == 0]
        return function(res)
    return wrapper