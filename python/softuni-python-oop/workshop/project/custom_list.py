from typing import List, Iterable
from workshop.project.errors import CustomListIndexException, CustomListTypeException, CustomListSumException


def is_index_integer(func):
    def wrapper(*args):
        index = args[1]
        if not isinstance(index, int):
            raise CustomListTypeException(f'Index must be of type integer it was {type(index)}')
        result = func(*args)
        return result
    return wrapper


def is_index_in_range(func):
    def wrapper(*args):
        self = args[0]
        length = len(self.sequence)
        index = args[1]
        if not (-length <= index <= length):
            raise CustomListIndexException(f'No element at {index} index\n')
        result = func(*args)
        return result
    return wrapper


class CustomList:
    def __init__(self, *args):
        self.sequence = list(args)

    def append(self, value):
        self.sequence += [value]
        return self.sequence

    @is_index_integer
    @is_index_in_range
    def remove(self, index: int):
        value = self.sequence[index]
        del self.sequence[index]
        return value

    @is_index_integer
    @is_index_in_range
    def get(self, index: int):
        value = self.sequence[index]
        return value

    def extend(self, iterable):
        if not isinstance(iterable, Iterable):
            raise CustomListTypeException('The argument should be iterable')
        for el in iterable:
            self.append(el)

    @is_index_integer
    @is_index_in_range
    def insert(self, index, value):
        self.sequence = self.sequence[0:index] + [value] + self.sequence[index:]
        return self.sequence

    def pop(self):
        try:
            value = self.sequence[-1]
            self.sequence = self.sequence[:-1]
            return value
        except IndexError:
            raise CustomListIndexException(f'Custom list does not have elements')

    def clear(self):
        self.sequence = []

    def index(self, value):
        for index in range(len(self.sequence)):
            if self.sequence[index] == value:
                return index
        return -1

    def count(self, value):
        count = 0
        for el in self.sequence:
            if el == value:
                count += 1
        return count

    def reverse(self):
        return self.sequence[::-1]

    def copy(self):
        return CustomList(*self.sequence)

    def deep_copy(self):
        pass

    def __str__(self):
        return f'*** {"; ".join([str(el) for el in self.sequence])} ***'

    def __repr__(self):
        return str(self)

    def size(self):
        return len(self.sequence)

    def add_first(self, value):
        self.sequence = [value] + self.sequence

    def dictionize(self):
        custom_dict = {}
        for i in range(0, len(self.sequence), 2):
            try:
                custom_dict[self.sequence[i]] = self.sequence[i + 1]
            except IndexError:
                custom_dict[self.sequence[i]] = ' '

    def move(self, amount):
        if len(self.sequence) == 0:
            return []
        self.sequence = self.sequence[amount:] + self.sequence[0: amount]
        return self.sequence

    def sum(self):
        result = 0
        for el in self.sequence:
            if isinstance(el, int) or isinstance(el, float):
                result += el
                continue
            try:
                result += len(el)
            except TypeError as ex:
                raise CustomListSumException('Please, provide a lem method\n')
        return result

    def overbound(self):
        max_number = float('-inf')
        element = None
        for el in self.sequence:
            num = el
            if not isinstance(el, int) and not isinstance(el, float):
                num = len(el)
            if max_number < num:
                max_number = num
                element = el
        return self.index(element)

    def underbound(self):
        min_number = float('inf')
        element = None
        for el in self.sequence:
            num = el
            if not isinstance(el, int) and not isinstance(el, float):
                num = len(el)
            if min_number > num:
                min_number = num
                element = el
        return self.index(element)


