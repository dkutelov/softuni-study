numbers = input().split()

reversed_numbers = []

for _ in range(len(numbers)):
    number = numbers.pop()
    reversed_numbers.append(number)

print(" ".join(map(str, reversed_numbers)))