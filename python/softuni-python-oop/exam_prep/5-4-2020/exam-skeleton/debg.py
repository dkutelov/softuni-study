from project.easter_shop import EasterShop
from project.factory.chocolate_factory import ChocolateFactory
from project.factory.egg_factory import EggFactory
from project.factory.paint_factory import PaintFactory

cf = ChocolateFactory('Test', 10)
ef = EggFactory('Test egg', 10)
pf = PaintFactory('Test paint', 10)
# print(cf.name)
# print(cf.capacity)

#cf.add_ingredient('milk', 10)
# cf.add_ingredient('dark chocolate', 50)
# cf.add_ingredient('sugar', 30)
# print(cf.ingredients)
# #cf.remove_ingredient('sugar', 20)
# print(cf.ingredients)
# print(cf.can_add(10))

# cf.add_recipe('dari', {'sugar': 10})
# cf.add_recipe('dari', {'dark chocolate': 10})
# print(cf.recipes)
#
# cf.make_chocolate('dari')
# cf.make_chocolate('dari')

es = EasterShop('Shop', chocolate_factory=cf, egg_factory=ef, paint_factory=pf)

es.add_chocolate_ingredient('dark chocolate', 2)
print(es.chocolate_factory.ingredients)

es.add_egg_ingredient('chicken egg', 2)
print(es.egg_factory.ingredients)

es.add_paint_ingredient('blue', 2)
print(es.paint_factory.ingredients)
cf.add_recipe('dari', {'dark chocolate':1})
es.make_chocolate('dari')
es.paint_egg('blue', 'chicken egg')
print(repr(es))