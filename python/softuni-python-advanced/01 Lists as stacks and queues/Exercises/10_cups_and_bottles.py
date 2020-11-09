from collections import deque

# inputs
cups = deque([int(cup) for cup in input().split()])
bottles = [int(bottle) for bottle in input().split()]

# variables
wasted_water = 0

# main
while True:
    cup = cups.popleft()
    bottle = bottles.pop()

    while cup > 0:
        extra_water = bottle - cup

        if extra_water > 0:
            wasted_water += extra_water
            break

        cup -= bottle

        if cup > 0:
            bottle = bottles.pop()

    if len(cups) == 0:
        print(f'Bottles: {" ".join([str(bottle) for bottle in bottles])}')
        break

    if len(bottles) == 0:
        print(f'Cups: {" ".join([str(cup) for cup in cups])}')
        break

print(f'Wasted litters of water: {wasted_water}')