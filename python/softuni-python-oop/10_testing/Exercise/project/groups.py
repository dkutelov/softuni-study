class Person:
    def __init__(self, name: str, surname: str):
        self.name = name
        self.surname = surname

    def __add__(self, other):
        return Person(self.name, other.surname)

    def __str__(self):
        return f'{self.name} {self.surname}'

    def __repr__(self):
        return f'Person 0: Name Surname'


class Group:
    def __init__(self, name, people):
        self.name = name
        self.people = people

    def __add__(self, other):
        return Group('new group', self.people + other.people)

    def __getitem__(self, index):
        return f'Person {index}: {self.people[index]}'

    def __len__(self):
        return len(self.people)

    def __str__(self):
        return f"Group {self.name} with members {', '.join([f'{p}'for p in self.people])}"

    def __repr__(self):
        return f"Group {self.name} with members {', '.join([f'{p}'for p in self.people])}"
