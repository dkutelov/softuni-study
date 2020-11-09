class A:
    def __init__(self):
        self.counter = 0

    def __iter__(self):
        return self

    def __next__(self):
        self.counter += 1
        if self.counter == 5:
            raise StopIteration
        else:
            return self.counter


a = A()
for el in a:
    print(el)