number = int(input())
numbers = map(int, input().split())
multiplied_numbers = map(lambda x: x * number, numbers)
print(" ".join(map(str, multiplied_numbers)))