class A:
    def __init__(self):
        self.__private = 'private'
        self.animals = ['Lion', 'Tiger']

    def add_animal(self, animal_name):
        try:
            animal = list(filter(lambda x: x == animal_name, self.animals))[0]
        except IndexError:
            return 'Animal already in zoo'

        self.animals.append(animal_name)
        return f'{animal_name} added!'
a = A()

a.__private = 'changed'

print(a.__dict__)
# {'_A__private': 'private', '__private': 'changed'}

print(a.add_animal('Cheetah'))
print(a.add_animal('Lion'))