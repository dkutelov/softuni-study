# comprehension
[print(word) for word in input().split() if len(word) % 2 == 0]

# filter
filtered = filter(lambda x: len(x) % 2 == 0, input().split())
[print(el) for el in filtered]
