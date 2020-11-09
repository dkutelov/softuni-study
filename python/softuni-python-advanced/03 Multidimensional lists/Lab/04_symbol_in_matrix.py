# 1
def read_matrix_and_symbol():
    dimension = int(input())
    matrix = [list(input()) for _ in range(dimension)]
    symbol = input()
    return matrix, symbol


def get_symbol_position(symbol, matrix):
    dimension = len(matrix)
    for i in range(dimension):
        for j in range(dimension):
            if matrix[i][j] == symbol:
                return i,j


def print_position(position):
    if position:
        i, j = position
        print(f'({i}, {j})')
    else:
        print(f"{symbol} does not occur in the matrix")


matrix, symbol = read_matrix_and_symbol()
position = get_symbol_position(symbol, matrix)
print_position(position)


# 2 class implementation


class Matrix_row:
    def __init__(self):
        self.cells = []

    def add_cell(self, value):
        self.cells.extend(value)

    def find_position(self, symbol):
        if symbol in self.cells:
            return self.cells.index(symbol)


class Matrix:
    def __init__(self):
        self.rows = []

    @staticmethod
    def print_indexes(i, j):
        print(f'({i}, {j})')

    @staticmethod
    def print_not_found(symbol):
        print(f'{symbol} does not occur in the matrix')

    def add_row(self, row):
        self.rows.append(row)

    def find_position(self, symbol):
        for i, row in enumerate(self.rows):
            position = row.find_position(symbol)
            if position:
                self.print_indexes(i, position)
                return
        self.print_not_found(symbol)

m = Matrix()

dimension = int(input())

for _ in range(dimension):
    r = Matrix_row()
    r_input = input()
    r.add_cell(list(r_input))
    m.add_row(r)


symbol = input()
m.find_position(symbol)
