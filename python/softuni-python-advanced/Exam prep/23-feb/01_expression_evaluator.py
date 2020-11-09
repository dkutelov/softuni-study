def expression_evaluator(expression):
    stack = list(reversed(expression.split()))
    current_numbers = []

    def execute_operation(operator, numbers):
        result = numbers[0]
        for n in numbers[1:]:
            if operator == '*':
                result *= n
            elif operator == '+':
                result = sum(numbers)
            elif operator == '-':
                result -= n
            elif operator == '/':
                result /= n
        return int(result)

    while len(stack) > 0:
        element = stack.pop()
        if str(element) in '*+-/':
            res = execute_operation(element, current_numbers)
            stack.append(res)
            current_numbers = []
        else:
            current_numbers.append(int(element))

    print(current_numbers[0])


#expression = input()
#expression_evaluator(expression)

#expression_evaluator('6 3 - 2 1 * 5 /')
#expression_evaluator('2 2 - 1 *')
##expression_evaluator('10 23 * 4 2 / 30 10 + 100 50 - 2 -1 *')

# solution 2
