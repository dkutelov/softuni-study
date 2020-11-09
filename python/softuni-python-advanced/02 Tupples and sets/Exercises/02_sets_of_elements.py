# 1

n, m = input().split()

set1 = {input() for _ in range(int(n))}
set2 = {input() for _ in range(int(m))}

[print(el) for el in (set1 & set2)]

# 2
n, m = [int(x) for x in input().split()]

first_set = set()
second_set = set()

# for _ in range(n):
#     number = int(input())
#     first_set.add(number)
[first_set.add(int(input())) for _ in range(n)]

# for _ in range(m):
#     number = int(input())
#     second_set.add(number)
[first_set.add(int(input())) for _ in range(m)]

#intersection_set = first_set & second_set
intersection_set = first_set.intersection(second_set)

[print(x) for x in intersection_set]