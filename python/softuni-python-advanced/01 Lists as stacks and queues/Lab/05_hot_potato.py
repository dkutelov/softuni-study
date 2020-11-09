from collections import deque


def play_game(people, n):
    players = deque(people.split())

    i = 1
    while len(players) > 1:
        current_player = players.popleft()

        if i % n == 0:
            print(f'Removed {current_player}')
        else:
            players.append(current_player)

        i += 1

    print(f'Last is {players.popleft()}')


people = input()
n = int(input())
play_game(people, n)