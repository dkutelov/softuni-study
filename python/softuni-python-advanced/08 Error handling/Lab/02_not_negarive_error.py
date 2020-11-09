class ValueCannotBeNegativeError(Exception):
    """ Raises error when received negative number"""
    def __init__(self, value):
        msg = f'Value {value} can not be negative'
        super().__init__(msg)


for _ in range(5):
    n = int(input())
    if n < 0:
        raise ValueCannotBeNegativeError(n)


