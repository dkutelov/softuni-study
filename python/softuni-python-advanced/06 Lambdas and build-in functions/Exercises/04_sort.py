numbers = map(int, input().split())
negative_numbers = filter(lambda x: x < 0, numbers)
print(abs(sum(negative_numbers)))