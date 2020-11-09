class countdown_iterator:
    def __init__(self, count):
        self.count = count

    def __iter__(self):
        return self

    def __next__(self):
        if self.count >= 0:
            current_count = self.count
            self.count -= 1
            return current_count
        raise StopIteration()


iterator = countdown_iterator(10)
for item in iterator:
    print(item, end=" ")