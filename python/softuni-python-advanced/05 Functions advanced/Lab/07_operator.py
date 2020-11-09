def operate(operator, *args):
    if operator in '*/':
        result = 1
    else:
        result = 0

    for x in args:
        if operator == '*':
            result *= x
        elif operator == '-':
            result -= x
        elif operator == '/':
            result /= x
        elif operator == '+':
            result += x
    return result


print(operate("+", 1, 2, 3))
