from project.vehicle import Vehicle
from project.car import Car
from project.family_car import FamilyCar
from project.sport_car import SportCar
from project.motorcycle import Motorcycle
from project.race_motorcycle import RaceMotorcycle
from project.cross_motorcycle import CrossMotorcycle


def test_instance(inst):
    print(f'Testing {inst.__class__.__name__}')
    print(inst.fuel)
    print(inst.horse_power)
    print(inst.fuel_consumption)
    inst.drive(100)
    print(inst.fuel)
    inst.drive(100)
    print(inst.fuel)


v = Vehicle(200, 100)
test_instance(v)

c = Car(350, 105)
test_instance(c)

fc = FamilyCar(350,110)
test_instance(fc)

sc = SportCar(4500,150)
test_instance(sc)

m = Motorcycle(200, 100)
test_instance(m)

cm = CrossMotorcycle(200, 100)
test_instance(cm)

rm = RaceMotorcycle(2000, 100)
test_instance(rm)