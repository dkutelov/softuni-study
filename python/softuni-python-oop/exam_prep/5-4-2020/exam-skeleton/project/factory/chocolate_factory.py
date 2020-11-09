from project.factory.factory import Factory


class ChocolateFactory(Factory):
    def __init__(self, name: str, capacity: int):
        Factory.__init__(self, name, capacity)
        self.recipes = dict()  # name as key, needed ingredients as dic
        self.products = dict()  # recipe as key and quantity as value

    def add_ingredient(self, ingredient_type: str, quantity: int):
        allowed_ingredients = ["white chocolate", "dark chocolate", "milk chocolate", "sugar"]

        if ingredient_type not in allowed_ingredients:
            raise TypeError(f"Ingredient of type {ingredient_type} not allowed in {self.name}")

        if not self.can_add(quantity):
            raise ValueError(f'Not enough space in factory')

        if ingredient_type not in self.ingredients:
            self.ingredients[ingredient_type] = 0

        self.ingredients[ingredient_type] += quantity

    def remove_ingredient(self, ingredient_type: str, quantity: int):
        if ingredient_type not in self.ingredients:
            raise KeyError('No such product in the factory')

        if self.ingredients[ingredient_type] < quantity:
            raise ValueError("Ingredient quantity cannot be less than zero")

        self.ingredients[ingredient_type] -= quantity

    def add_recipe(self, recipe_name: str, recipe: dict):
        if recipe_name in self.recipes:
            self.recipes[recipe_name].update(recipe)
        else:
            self.recipes[recipe_name] = recipe

    def make_chocolate(self, recipe_name: str):
        if recipe_name not in self.recipes:
            raise TypeError('No such recipe')

        if recipe_name not in self.products:
            self.products[recipe_name] = 0
        self.products[recipe_name] += 1

        for ingredient_type, quantity in self.recipes[recipe_name].items():
            self.remove_ingredient(ingredient_type, quantity)




