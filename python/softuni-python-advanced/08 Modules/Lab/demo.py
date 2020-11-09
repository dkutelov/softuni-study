from random import randint, shuffle

nums = [randint(1, 500) for _ in range(20)]

shuffle(nums)

print(nums)