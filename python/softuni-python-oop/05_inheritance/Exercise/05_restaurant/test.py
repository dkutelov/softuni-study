from project.product import Product
from project.beverage.beverage import Beverage
from project.beverage.cold_beverage import ColdBeverage
from project.beverage.hot_beverage import HotBeverage
from project.beverage.coffee import Coffee
from project.beverage.tea import Tea
from project.food.food import Food
from project.food.main_dish import MainDish
from project.food.salmon import Salmon
from project.food.soup import Soup
from project.food.cake import Cake
product = Product('Tahini', 110)
print(product.name)
print(product.price)
#
# sw = Beverage('Schwepps', 101, 500)
# print(sw.name)
# print(sw.price)
# print(sw.milliliters)
#
# cb = ColdBeverage('Beer', 121, 500)
# print(cb.name)
# print(cb.price)
# print(cb.milliliters)
#
# hb = HotBeverage('Capuccino', 131, 200)
# print(hb.name)
# print(hb.price)
# print(hb.milliliters)
#
# dn = Food('Dinner', 103, 300)
# print(dn.name)
# print(dn.price)
# print(dn.grams)
#
# cf = Coffee('Espresso', 40)
# print(cf.name)
# print(cf.price)
# print(cf.milliliters)
# print(cf.caffeine)
#
# t = Tea('Green', 1.31, 100)
# print(t.name)
# print(t.price)
# print(t.milliliters)
#
# md = MainDish('main', 2.33, 900)
# print(md.name)
# print(md.price)
# print(md.grams)

# sal = Salmon('Grilled Salmon', 20.4)
# print(sal.name)
# print(sal.price)
# print(sal.grams)

# so = Soup('Chicken', 2.40, 400)
# print(so.name)
# print(so.price)
# print(so.grams)

ds = Cake('Chocolate Pie')
print(ds.name)
print(ds.price)
print(ds.grams)
print(ds.calories)