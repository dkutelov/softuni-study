from project.factory.factory import Factory


class PaintFactory(Factory):
    def __init__(self, name: str, capacity: int):
        Factory.__init__(self, name, capacity)

    def add_ingredient(self, ingredient_type: str, quantity: int):
        allowed_ingredients = ["white", "yellow", "blue", "green", "red"]

        if ingredient_type not in allowed_ingredients:
            raise TypeError(f"Ingredient of type {ingredient_type} not allowed in {self.name}")

        if not self.can_add(quantity):
            raise ValueError(f'Not enough space in factory')

        if ingredient_type not in self.ingredients:
            self.ingredients[ingredient_type] = 0

        self.ingredients[ingredient_type] += quantity

    def remove_ingredient(self, ingredient_type: str, quantity: int):
        if ingredient_type not in self.ingredients:
            raise KeyError('No such ingredient in the factory')

        if self.ingredients[ingredient_type] < quantity:
            raise ValueError("Ingredient quantity cannot be less than zero")

        self.ingredients[ingredient_type] -= quantity

    @property
    def products(self):
        return self.ingredients

