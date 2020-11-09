from project.animal import Animal
from project.mammal import Mammal
from project.bear import Bear
from project.gorilla import Gorilla
from project.lizard import Lizard
from project.snake import Snake

a = Animal('human')
print(a.name)

m = Mammal('another human')
print(m.name)

b = Bear('Bear')
g = Gorilla('Gorilla')
print(b.name)
print(g.name)

l = Lizard('L')
s = Snake('S')

print(l.name)
print(s.name)