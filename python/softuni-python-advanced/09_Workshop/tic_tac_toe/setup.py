from tic_tac_toe.Player import Player


def setup_board(size):
    return [[None] * size for n in range(size)]


def setup_player(mark=None):
    name = input('Name: ')

    if mark:
        print(f'Mark: {mark}')
    while mark not in ('X', 'O'):
        mark = input('Mark: ').upper()
    return Player(name, mark)


def setup(size):
    player_one = setup_player()
    player_two = setup_player('O' if player_one.mark == 'X' else 'X')
    board = setup_board(size)
    return board, player_one, player_two
