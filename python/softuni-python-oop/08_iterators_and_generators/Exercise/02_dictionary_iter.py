class dictionary_iter:
    def __init__(self, obj):
        self.obj = obj
        self.keys = list(obj.keys())
        self.index = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.index < len(self.obj.keys()):
            current_key = self.keys[self.index]
            current_value = self.obj[current_key]
            self.index += 1
            return current_key, current_value
        else:
            raise StopIteration()

result = dictionary_iter({1: "1", 2: "2"})
for x in result:
    print(x)
