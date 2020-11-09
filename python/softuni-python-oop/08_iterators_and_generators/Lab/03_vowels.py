

class vowels:
    def __init__(self, text: str):
        self.text = text
        self.index = 0
        self.vowels_list = ['a',  'o', 'i', 'u', 'e', 'y']

    def __iter__(self):
        return self

    def __next__(self):
        if self.index < len(self.text):
            current_index = self.index
            self.index += 1
            if self.text[current_index].lower() in self.vowels_list:
                return self.text[current_index]
            else:
                return self.__next__()
        else:
            raise StopIteration()


class vowels:
    VOWEL_LIST = ['a', 'o', 'i', 'u', 'e', 'y']

    def __init__(self, text: str):
        self.text = list(filter(lambda x: x.lower() in vowels.VOWEL_LIST, list(text)))
        self.index = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.index < len(self.text):
            current_index = self.index
            self.index += 1
            return self.text[current_index]
        else:
            raise StopIteration()

my_string = vowels('Abcedifuty0o')
for char in my_string:
    print(char)
