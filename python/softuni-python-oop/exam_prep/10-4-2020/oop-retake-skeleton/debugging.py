from project.bunker import Bunker
from project.medicine.painkiller import Painkiller
from project.medicine.salve import Salve
from project.supply.food_supply import FoodSupply
from project.supply.water_supply import WaterSupply
from project.survivor import Survivor

food_supply1 = FoodSupply()
food_supply2 = FoodSupply()
water_supply1 = WaterSupply()
water_supply2 = WaterSupply()
survivor1 = Survivor('Survivor1', 20)
survivor2 = Survivor('Survivor2', 40)
painkiller1 = Painkiller()
painkiller2 = Painkiller()
salve1 = Salve()

bunker = Bunker()
bunker.add_survivor(survivor1)
bunker.add_survivor(survivor2)

bunker.add_supply(water_supply1)
bunker.add_supply(water_supply2)
bunker.add_supply(food_supply1)
bunker.add_supply(food_supply2)
bunker.add_medicine(painkiller1)
bunker.add_medicine(painkiller2)


# survivor1.needs = 10
# print(survivor1.needs)
# print(bunker.supplies)
# print(bunker.food)
# print(bunker.sustain(survivor1, 'FoodSupply'))
# print(survivor1.needs)
# print(bunker.supplies)
# print(bunker.food)

survivor1.health = 10
print(survivor1.health)
print(bunker.medicine)
print(bunker.painkillers)
print(bunker.heal(survivor1, 'Painkiller'))
print(survivor1.health)
print(bunker.medicine)
print(bunker.painkillers)