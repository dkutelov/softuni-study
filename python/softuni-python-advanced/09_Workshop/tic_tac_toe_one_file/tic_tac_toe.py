BOARD_SIZE = 3


class Player:
    def __init__(self, name, mark):
        self.name = name
        self.mark = mark

    def __str__(self):
        return f'Name: {self.name}, Mark: {self.mark}'

    # def __repl__(self):
    #     return f'Name: {self.name}, Mark: {self.mark}'


def print_board(board):
    for row in board:
        values = []
        for cell in row:
            if cell is None:
                values.append(' ')
            else:
                values.append(cell)
        print(f"| {' | '.join(values)} |")


def setup_board(size):
    return [[None] * size for n in range(size)]


def setup_player(mark=None):
    name = input('Name: ')
    if not mark:
        mark = input('Mark: ').upper()
    else:
        print(f'Mark: {mark}')
    return Player(name, mark)


def setup():
    player_one = setup_player()
    player_two = setup_player('O' if player_one.mark == 'X' else 'X')
    board = setup_board(BOARD_SIZE)
    return board, player_one, player_two


def print_welcome(player):
    print('This is the numeration of the board:')
    print('| 1 | 2 | 3 |')
    print('| 4 | 5 | 6 |')
    print('| 7 | 8 | 9 |')
    print(f'{player.name} starts first!')


def get_position(player):
    position = int(input(f'{player.name} choose a free position [1-9]: '))
    row = (position - 1) // BOARD_SIZE
    col = (position - 1) % BOARD_SIZE
    return row, col


def place_mark(board, player):
    row, col = get_position(player)
    board[row][col] = player.mark


def all_same_values(board_segment, mark):
    for cell_value in board_segment:
        if cell_value != mark:
            return False
    return True


def check_game_over(board, player):
    rows = board
    columns = [[board[i][j] for i in range(BOARD_SIZE)] for j in range(BOARD_SIZE)]
    diagonals = [[board[i][i] for i in range(BOARD_SIZE)], [board[i][BOARD_SIZE - i - 1] for i in range(BOARD_SIZE)]]

    columns_check = [all_same_values(col, player.mark) for col in columns]
    row_checks = [all_same_values(row, player.mark) for row in rows]
    diagonals_checks = [all_same_values(diagonal, player.mark) for diagonal in diagonals]
    all_checks = [*row_checks, *columns_check, *diagonals_checks]

    return any(all_checks)


def print_game_over(board, player):
    print_board(board)
    print(f'{player.name} won!')


def game_loop(board, players):
    current_player, next_player = players

    while True:
        place_mark(board, current_player)
        if check_game_over(board, current_player):
            print_game_over(board, current_player)
            break
        print_board(board)
        current_player, next_player = next_player, current_player


def start_game():
    board, *players = setup()
    print_welcome(players[0])
    game_loop(board, players)


start_game()