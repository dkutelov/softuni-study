command = input()
numbers = list(map(int, input().split()))

numbers_length = len(numbers)

if command == 'Even':
    even_numbers = filter(lambda x: x % 2 == 0, numbers)
    print(sum(even_numbers) * numbers_length)
elif command == 'Odd':
    odd_numbers = filter(lambda x: x % 2 != 0, numbers)
    print(sum(odd_numbers) * numbers_length)
