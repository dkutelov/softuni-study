# numbers = map(int, input().split())
# even_numbers = filter(lambda x: x % 2 == 0, numbers)
# print(list(even_numbers))

numbers = map(int,input().split())
print([x for x in numbers if x % 2 == 0])

