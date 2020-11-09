class Person:
    def __init__(self, name, age):
        print(f'Init method for person {name}')
        self.name = name
        self.age = age
        print(self)

    def say_hello(self):
        print(f'{self.name} says "Hello"')


p = Person('John', 50)
print(p.name)
print(p)
# p and self have the same address in the memory
p.say_hello()

s = Person('Sarah',20)
s.say_hello()

# ---
text = 'asd'


def fix_text():
    global text
    print(f'{text}') # works
    text = f'Fixed: {text}' # assignment does not work w/o global


fix_text()
print(text)