from project.factory.chocolate_factory import ChocolateFactory
from project.factory.egg_factory import EggFactory
from project.factory.paint_factory import PaintFactory


class EasterShop:
    def __init__(self, name: str, chocolate_factory: ChocolateFactory, egg_factory: EggFactory, paint_factory: PaintFactory):
        self.name = name
        self.paint_factory = paint_factory
        self.egg_factory = egg_factory
        self.chocolate_factory = chocolate_factory
        self.storage = dict()  # product name as key and quantity

    def add_chocolate_ingredient(self, ingredient_type: str, quantity: int):
        self.chocolate_factory.add_ingredient(ingredient_type, quantity)

    def add_egg_ingredient(self, ingredient_type: str, quantity: int):
        self.egg_factory.add_ingredient(ingredient_type, quantity)

    def add_paint_ingredient(self, ingredient_type: str, quantity: int):
        self.paint_factory.add_ingredient(ingredient_type, quantity)

    def make_chocolate(self, recipe: str):
        self.chocolate_factory.make_chocolate(recipe)
        if recipe not in self.storage:
            self.storage[recipe] = 0
        self.storage[recipe] += 1

    def paint_egg(self, color: str, egg_type: str):
        try:
            self.egg_factory.remove_ingredient(egg_type, 1)
            self.paint_factory.remove_ingredient(color, 1)
            key = f'{color} {egg_type}'
            if key not in self.storage:
                self.storage[key] = 0
            self.storage[key] += 1
        except:
            raise ValueError('Invalid commands')

    def __repr__(self):
        message = f'Shop name: {self.name}\nShop Storage:\n'
        for item in self.storage:
            message += f'{item}: {self.storage[item]}\n'
        return message

