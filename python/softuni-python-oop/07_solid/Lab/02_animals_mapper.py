sound_mapper = {
    'cat': 'meow',
    'dog': 'woof-woof',
    'chicken': 'chicken sound'
}

class Animal:
    def __init__(self, species):
        self.species = species

    def get_species(self):
        return self.species


def animal_sound(animals: list):
    for animal in animals:
        try:
            print(sound_mapper(animal.species))
        except:
            print('Unknown sound')


animals = [Animal('cat'), Animal('dog')]
animal_sound(animals)

## добавете ново животно и рефакторирайте кода да работи без да се налага да се правят промени по него
## при добавяне на нови животни
# animals = [Animal('cat'), Animal('dog'), Animal('chicken')]