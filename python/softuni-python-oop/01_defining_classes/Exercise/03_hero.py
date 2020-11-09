class Hero:
    def __init__(self, name, health):
        self.name = name
        self.health = health

    def is_defeated(self, damage):
        return self.health - damage <= 0

    def defend(self, damage):
        if self.is_defeated(damage):
            self.health = 0
            return f"{self.name} was defeated"

        self.health -= damage

    def heal(self, amount):
        self.health += amount


hero = Hero("Peter", 100)
print(hero.defend(50))
hero.heal(50)
print(hero.defend(99))
print(hero.defend(1))