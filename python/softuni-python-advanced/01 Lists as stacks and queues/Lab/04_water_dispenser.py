# Solution 1
from collections import deque


def solve():
    liters = int(input())
    people = deque()

    while True:
        command = input()

        if command == 'Start':
            break

        person = command
        people.append(person)

    while True:
        command = input().split(' ')

        if command[0] == 'End':
            print(f'{liters} liters left')
            break

        elif command[0] == 'refill':
            liters += int(command[1])
            continue

        else:
            person = people.popleft()
            person_liters = int(command[0])

        if liters < person_liters:
            print(f'{person} must wait')
        else:
            liters -= person_liters
            print(f'{person} got water')


solve()

# Solution 2
from collections import deque


def solve():
    liters = int(input())
    people = deque()

    while True:
        person = input()

        if person == 'Start':
            break

        people.append(person)

    while people:
        command = input()

        if command.startswith('refill'):
            liters += int(command.split()[1])
            continue

        person = people.popleft()
        person_liters = int(command)

        if liters < person_liters:
            print(f'{person} must wait')
        else:
            liters -= person_liters
            print(f'{person} got water')

    print(f'{liters} liters left')


solve()
