from statistics import mean


class CalculateAverageMixin:
    def get_average(self, values):
        return mean(values)


class MathUtils:
    @staticmethod
    def get_average(values):
        return mean(values)


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age


class Student(Person, CalculateAverageMixin):
    def __init__(self, name, age, grades):
        super().__init__(name, age)
        self.grades = grades

    def get_average_grades(self):
        return MathUtils.get_average(self.grades)


class Employee(Person, CalculateAverageMixin):
    def __init__(self, name, age, daily_working_hours):
        super().__init__(name, age)
        self.daily_working_hours = daily_working_hours


st = Student('Peter', 40, [1,2,3,4])

print(st.get_average_grades())