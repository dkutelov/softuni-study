def get_matching_brackets(expression):
    opening_brackets_stack = []
    expressions_in_brackets = []

    for i in range(len(expression)):
        if expression[i] == '(':
            opening_brackets_stack.append(i)
        elif expression[i] == ')':
            start_i = opening_brackets_stack.pop()
            end_i = i + 1
            expressions_in_brackets.append(expression[start_i:end_i])

    return '\n'.join(expressions_in_brackets)


print(get_matching_brackets(input()))