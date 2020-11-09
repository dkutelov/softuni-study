class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def get_greeting(self):
        return f'Hello, My name is {self.name} and I\'am {self.age}-years-old.'
