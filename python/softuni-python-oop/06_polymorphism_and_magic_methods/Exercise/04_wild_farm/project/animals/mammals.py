from project.animals.animal import Mammal


class Mouse(Mammal):
    def __init__(self, name, weight, living_region):
        super().__init__(name, weight, living_region)

    def make_sound(self):
        return 'Squeak'

    def feed(self, food):
        food_type = food.__class__.__name__
        if food_type not in ['Vegetable', 'Fruit']:
            return f'{self.__class__.__name__} does not eat {food_type}!'
        self.weight += food.quantity * 0.1
        self.food_eaten += food.quantity

    def __repr__(self):
        return f"{self.__class__.__name__} [{self.name}, {self.weight}, {self.living_region}, {self.food_eaten}]"


class Dog(Mammal):
    def __init__(self, name, weight, living_region):
        super().__init__(name, weight, living_region)

    def make_sound(self):
        return 'Woof!'

    def feed(self, food):
        food_type = food.__class__.__name__
        if food_type != 'Meat':
            return f'{self.__class__.__name__} does not eat {food_type}!'
        self.weight += food.quantity * 0.4
        self.food_eaten += food.quantity

    def __repr__(self):
        return f"{self.__class__.__name__} [{self.name}, {self.weight}, {self.living_region}, {self.food_eaten}]"


class Cat(Mammal):
    def __init__(self, name, weight, living_region):
        super().__init__(name, weight, living_region)

    def make_sound(self):
        return 'Meow'

    def feed(self, food):
        food_type = food.__class__.__name__
        if food_type not in ['Vegetable', 'Meat']:
            return f'{self.__class__.__name__} does not eat {food_type}!'
        self.weight += food.quantity * 0.3
        self.food_eaten += food.quantity

    def __repr__(self):
        return f"{self.__class__.__name__} [{self.name}, {self.weight}, {self.living_region}, {self.food_eaten}]"


class Tiger(Mammal):
    def __init__(self, name, weight, living_region):
        super().__init__(name, weight, living_region)

    def make_sound(self):
        return 'ROAR!!!'

    def feed(self, food):
        food_type = food.__class__.__name__
        if food_type != 'Meat':
            return f'{self.__class__.__name__} does not eat {food_type}!'
        self.weight += food.quantity * 1.0
        self.food_eaten += food.quantity

    def __repr__(self):
        return f"{self.__class__.__name__} [{self.name}, {self.weight}, {self.living_region}, {self.food_eaten}]"