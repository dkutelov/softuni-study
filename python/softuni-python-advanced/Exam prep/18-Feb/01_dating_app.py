from _collections import deque

males = [int(x) for x in input().split()]
females = deque([int(x) for x in input().split()])

match_count = 0

while males and females:

    male = males[-1]
    female = females[0]

    if male <= 0:
        males.pop()

    elif female <= 0:
        females.popleft()

    elif female % 25 == 0:
        females.pop()
        if females:
            females.pop()

    elif male % 25 == 0:
        males.pop()
        if males:
            males.pop()

    elif male == female:
        males.pop()
        females.popleft()
        match_count += 1

    else:
        females.popleft()
        males.append(males.pop() - 2)

print(f"Matches: {match_count}")
print(f"Males left: {'none' if not males else ', '.join([str(x) for x in reversed(males)])}")
print(f"Females left: {', '.join([str(x) for x in females]) if females else 'none' }")
