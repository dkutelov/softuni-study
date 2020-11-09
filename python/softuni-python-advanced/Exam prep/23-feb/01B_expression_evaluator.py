from _collections import deque

expression = deque(input().split())
saved_numbers = []

while True:
    current_element = expression.popleft()

    if current_element in '-+*/':
        result = int(eval(current_element.join(saved_numbers)))
        expression.appendleft(str(result))
        saved_numbers = []

        if len(expression) == 1:
            break
    else:
        saved_numbers.append(current_element)

print(expression[0])