def type_check(arg_type):
    def decorator(func):
        def wrapper(x):
            if isinstance(x, arg_type):
                return func(x)
            return "Bad Type"
        return wrapper
    return decorator


# class solution
class type_check_cls:
    def __init__(self, type_param):
        self._type_param = type_param

    def __call__(self, func):
        def wrapper(n):
            if isinstance(n, self._type_param):
                return func(n)
            return 'Bad Type'
        return wrapper


@type_check_cls(str)
def first_letter(word):
    return word[0]


print(first_letter('Hello World'))
print(first_letter(['Not', 'A', 'String']))

