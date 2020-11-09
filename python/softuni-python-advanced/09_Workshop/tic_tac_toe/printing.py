def print_welcome(player):
    print('This is the numeration of the board:')
    print('| 1 | 2 | 3 |')
    print('| 4 | 5 | 6 |')
    print('| 7 | 8 | 9 |')
    print(f'{player.name} starts first!')


def print_board(board):
    for row in board:
        values = []
        for cell in row:
            if cell is None:
                values.append(' ')
            else:
                values.append(cell)
        print(f"| {' | '.join(values)} |")


def print_game_over(board, player):
    print_board(board)
    print(f'{player.name} won!')