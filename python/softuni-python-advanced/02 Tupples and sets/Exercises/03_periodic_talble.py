# 1
elements = []
[elements.extend(input().split()) for _ in range(int(input()))]
[print(el) for el in set(elements)]


# 2
unique_elements = set()

n = int(input())
for _ in range(n):
    elements = set(input().split())
    # unique_elements = unique_elements | elements
    # unique_elements = unique_elements.union(elements)
    unique_elements |= elements
[print(x) for x in unique_elements]