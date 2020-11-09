class Stack:
    def __init__(self):
        self.stack_numbers = []

    def add_numbers(self, values, num):
        [self.stack_numbers.append(values[i]) for i in range(num)]

    def remove_items(self, num):
        [self.stack_numbers.pop() for _ in range(num)]

    def is_number_in_stack(self, num):
        minN = float('inf')
        if len(self.stack_numbers) == 0:
            return '0'

        while self.stack_numbers:
            item = self.stack_numbers.pop()
            if item < minN:
                minN = item

            if item == num:
                return True

        return minN

    def print_stack(self):
        print(", ".join([str(el) for el in self.stack_numbers]))


num_add, num_remove, searched_numbers = [int(x) for x in input().split()]
stack_numbers = [int(x) for x in input().split()]

stack = Stack()

stack.add_numbers(stack_numbers, num_add)
stack.remove_items(num_remove)
print(stack.is_number_in_stack(searched_numbers))



