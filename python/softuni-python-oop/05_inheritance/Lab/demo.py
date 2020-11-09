class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def eat(self):
        print(f'{self.name} is eating')

    def __repr__(self):
        return f'Name: {self.name}, age: {self.age}'


class Student:
    def __init__(self, name, age, grade):
        self.name = name
        self.age = age
        self.grade = grade

    def __repr__(self):
        return f'Name: {self.name}, age: {self.age}, grade: {self.grade}'


class Employee:
    def __init__(self, name, age, company, salary):
        self.name = name
        self.age = age
        self.grade = company
        self.salary = salary

    def __repr__(self):
        return f'Name: {self.name}, age: {self.age}, grade: {self.grade}'