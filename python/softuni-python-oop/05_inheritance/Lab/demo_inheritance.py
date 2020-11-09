class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def eat(self):
        print(f'{self.name} is eating')

    def get_greeting(self):
        return f'Hello, I am {self.name}'

    def __repr__(self):
        return f'Name: {self.name}, age: {self.age}'


class Student(Person):
    def __init__(self, name, age, grade):
        super().__init__(name, age)
        self.grade = grade

    def get_student_greeting(self):
        print(self.get_greeting())
        print(super().get_greeting()) # super is the same as self but does not make sense
        # we use the super only if we override the methods
    
    def __repr__(self):
        parent_repr = super().__repr__()
        return f'Name: {parent_repr}, grade: {self.grade}'


class Employee(Person):
    def __init__(self, name, age, company, salary):
        super().__init__(name, age)
        self.company = company
        self.salary = salary

    def __repr__(self):
        parent_repr = super().__repr__()
        return f'{parent_repr}, company: {self.company}, salary: {self.salary}'


class PersonExample(Person):
    # if we do not modify the init method we can skip it
    @property
    def is_adult(self):
        return self.age > 18
