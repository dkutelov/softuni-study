# Array solution
stops = []
number_of_stops = int(input())

for _ in range(number_of_stops):
    fuel, distance = [int(n) for n in input().split()]
    stops.append((fuel, distance))


start_index = 0

while True:
    truck_fuel = 0
    success_stops = 0

    for i in range(start_index, start_index + number_of_stops):
        fuel, distance = stops[i]
        truck_fuel += fuel

        if truck_fuel >= distance:
            truck_fuel -= distance
            success_stops += 1
        else:
            break

    if success_stops == number_of_stops:
        print(start_index)
        break

    stops.append(stops[start_index])
    start_index += 1


# second solution
from collections import deque

pumps = deque()
number_of_pumps = int(input())

for _ in range(number_of_pumps):
    fuel, distance = [int(n) for n in input().split()]
    pumps.append((fuel, distance))


start_index = 0

while True:
    truck_fuel = 0
    success_stops = 0

    for i in range(start_index, start_index + number_of_pumps):
        fuel, distance = pumps[i]
        truck_fuel += fuel

        if truck_fuel >= distance:
            truck_fuel -= distance
            success_stops += 1
        else:
            break

    if success_stops == number_of_pumps:
        print(start_index)
        break

    pumps.append(pumps[start_index])
    start_index += 1