numbers = list(map(lambda x: round(float(x)), input().split()))

print(min(numbers))
print(max(numbers))

tripled_numbers = set(map(lambda x: x*3, numbers))
sorted_numbers = sorted(tripled_numbers)
print(" ".join(list(map(str, sorted_numbers))))
