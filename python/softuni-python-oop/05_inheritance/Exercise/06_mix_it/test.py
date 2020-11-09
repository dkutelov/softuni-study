from project.capacity_mixin import CapacityMixin
from project.vehicle.car import Car
from project.vehicle.bus import Bus
from project.vehicle.plane import Plane
from project.technology.laptop import Laptop
from project.technology.smart_phone import SmartPhone

# res = CapacityMixin.get_capacity(100, 80)
# res1 = CapacityMixin.get_capacity(80, 110)
# print(res)
# print(res1)


# car = Car(available_seats=4, fuel_tank=50, fuel_consumption=3, fuel=20)
# print(car.fuel)
# # car.fuel = 15
# print(car.fuel)
# print(car.drive(2))
# print(car.fuel)
# print(car.refuel(45))
# # print(car.refuel(30))
# print('-------')
# bus = Bus(10, 5)
# print(bus.get_ticket(11))
# #print(bus.tickets_sold)
# print(bus.get_ticket(9))
# print(bus.get_total_profit())
# print('-------')
# plane = Plane(20, 4, 5)
# print(plane.buy_tickets(5, 10))
# print(plane.buy_tickets(4, 6))
# print(plane.buy_tickets(4, 4))
# print(plane.seats_available)
# print(plane.available_seats)
#
# laptop = Laptop(1000, 20)
# print(laptop.install_software('OBS', 20))
# print(laptop.install_software('OBS', 1900))
#
# sm = SmartPhone(1000, 20)
# print(sm.install_apps('OBS', 20))
# print(sm.install_apps('OBS', 1900))


car = Car(available_seats=4, fuel_tank=50, fuel_consumption=5, fuel=30)
print(car.refuel(20))
car.drive(1)
print(car.refuel(10))