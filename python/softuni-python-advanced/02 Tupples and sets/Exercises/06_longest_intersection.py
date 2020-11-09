# 1
def get_range(n):
    start, end = n.split(',')
    return set(n for n in range(int(start), int(end) + 1))


def solve(numbers):
    intersections = []

    for number in numbers:
        n1, n2 = number.split('-')
        set1, set2 = get_range(n1), get_range(n2)
        intersection = set1 & set2
        intersections.append(intersection)

    longest_length = max([len(intersection) for intersection in intersections])
    for intersection in intersections:
        if len(intersection) == longest_length:
            print(f'Longest intersection is {list(intersection)} with length {len(intersection)}')


range_numbers = [input() for _ in range(int(input()))]
solve(range_numbers)

# 2
n = int(input())
best_intersection = set()

for _ in range(n):
    ranges = input().split('-')

    first_range = [int(x) for x in ranges[0].split(',')]
    second_range = [int(x) for x in ranges[1].split(',')]

    first_set = set(x for x in range(first_range[0], first_range[1] + 1))
    second_set = set(x for x in range(second_range[0], second_range[1] + 1))
    intersection = first_set & second_set

    if len(intersection) > len(best_intersection):
        best_intersection = intersection

print(f'Longest intersection is {list(best_intersection)} with length {len(best_intersection)}')