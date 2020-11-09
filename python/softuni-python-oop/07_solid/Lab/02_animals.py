from abc import ABC, abstractmethod


class Animal(ABC):
    def __init__(self, species):
        pass

    @abstractmethod
    def make_sound(self):
        pass


class Cat(Animal):
    def __init__(self):
        self.sound = 'meow'

    def make_sound(self):
        return self.sound


class Dog(Animal):
    def __init__(self):
        self.sound = 'woof-woof'

    def make_sound(self):
        return self.sound


class Chicken(Animal):
    def __init__(self):
        self.sound = 'chicken sound'

    def make_sound(self):
        return self.sound


def animal_sound(animals: list):
    for animal in animals:
        print(animal.make_sound())


# animals = [Animal('cat'), Animal('dog')]
# animal_sound(animals)

## добавете ново животно и рефакторирайте кода да работи без да се налага да се правят промени по него
## при добавяне на нови животни

animals = [Cat(), Dog(), Chicken()]
animal_sound(animals)