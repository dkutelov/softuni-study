def list_manipulator(numbers, *args):
    command = args[0]
    position = args[1]
    result = []
    additional_numbers = args[2:]

    if command == 'add':
        if position == 'beginning':
            result = list(additional_numbers) + numbers
        elif position == 'end':
            result = numbers + list(additional_numbers)

    elif command == 'remove':
        idx = None
        if additional_numbers:
            idx = additional_numbers[0]
        else:
            idx = 1
        if position == 'beginning':
            result = numbers[idx:]
        elif position == 'end':
            result = numbers[:-idx]

    return result


print(list_manipulator([1,2,3], "remove", "end"))
print(list_manipulator([1,2,3], "remove", "beginning"))
print(list_manipulator([1,2,3], "add", "beginning", 20))
print(list_manipulator([1,2,3], "add", "end", 30))
print(list_manipulator([1,2,3], "remove", "end", 2))
print(list_manipulator([1,2,3], "remove", "beginning", 2))
print(list_manipulator([1,2,3], "add", "beginning", 20, 30, 40))
print(list_manipulator([1,2,3], "add", "end", 30, 40, 50))

