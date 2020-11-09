from tic_tac_toe.printing import print_board, print_game_over, print_welcome
from tic_tac_toe.setup import setup


def get_position(player, size):
    position = 0
    while position <1 or position > 9:
        position = int(input(f'{player.name} choose a free position [1-9]: '))
    row = (position - 1) // size
    col = (position - 1) % size
    return row, col


def place_mark(board, player):
    row, col = get_position(player, len(board))
    board[row][col] = player.mark


def all_same_values(board_segment, mark):
    for cell_value in board_segment:
        if cell_value != mark:
            return False
    return True


def check_game_over(board, player):
    size = len(board)
    rows = board
    columns = [[board[i][j] for i in range(size)] for j in range(size)]
    diagonals = [[board[i][i] for i in range(size)], [board[i][size - i - 1] for i in range(size)]]

    columns_check = [all_same_values(col, player.mark) for col in columns]
    row_checks = [all_same_values(row, player.mark) for row in rows]
    diagonals_checks = [all_same_values(diagonal, player.mark) for diagonal in diagonals]
    all_checks = [*row_checks, *columns_check, *diagonals_checks]

    return any(all_checks)


def game_loop(board, players):
    current_player, next_player = players

    while True:
        place_mark(board, current_player)
        if check_game_over(board, current_player):
            print_game_over(board, current_player)
            break
        print_board(board)
        current_player, next_player = next_player, current_player


def start_game(size):
    board, *players = setup(size)
    print_welcome(players[0])
    game_loop(board, players)
