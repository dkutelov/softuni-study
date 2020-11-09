result = [f'{word} -> {len(word)}' for word in input().split(', ')]
print(", ".join(result))

# dictionary
elements = {word: len(word) for word in input().split(', ')}
res = [f"{key} -> {value}" for key, value in elements.items()]
print(", ".join(res))
