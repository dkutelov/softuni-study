import copy


class Person:
    def __init__(self, position):
        self.position = position

    def walk_north(self):
        pass

    def walk_east(self, dist):
        pass


class FreePerson(Person):
    def __init__(self, position):
        Person.__init__(self, position)

    def walk_north(self, dist):
        self.position[1] += dist

    def walk_east(self, dist):
        self.position[0] += dist


class Prisoner(Person):
    PRISON_LOCATION = [3, 3]

    def __init__(self):
        Person.__init__(self, copy.copy(self.PRISON_LOCATION))
        self.is_free = False



free_person = FreePerson([3,3])
print("The prisoner trying to walk to north by 10 and east by -3.")

try:
    free_person.walk_north(10)
    free_person.walk_east(-3)
except:
    pass


#print(f"The location of the prison: {free_person.PRISON_LOCATION}")
print(f"The current position of the prisoner: {free_person.position}")

print('-----')
prisoner = Prisoner()
print("The prisoner trying to walk to north by 10 and east by -3.")

try:
    prisoner.walk_north(10)
    prisoner.walk_east(-3)
except:
    pass

print(f"The location of the prison: {prisoner.PRISON_LOCATION}")
print(f"The current position of the prisoner: {prisoner.position}")
