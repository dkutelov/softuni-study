from collections import deque
hall_capacity = int(input())
tokens = input().split()
current_people = []
current_sum = 0
halls = deque()


def print_hall(hall, people):
    print(f'{hall} -> {", ".join([str(person) for person in people])}')


while tokens:
    token = tokens.pop()

    if token.isalpha():
        halls.append(token)

    else:
        if not halls:
            continue

        reservation = int(token)

        if current_sum + reservation > hall_capacity:
            current_hall = halls.popleft()
            print_hall(current_hall, current_people)
            current_people.clear()
            current_sum = 0

        if halls:
            current_people.append(reservation)
            current_sum += reservation






