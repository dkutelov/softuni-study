# 1
# from collections import deque
#
# green_light_seconds = int(input())
# free_window_seconds = int(input())
#
# cars = deque()
# cars_passed = 0
# crushed = False
#
# while True:
#     token = input()
#
#     if token == 'END':
#         print("Everyone is safe.")
#         print(f"{cars_passed} total cars passed the crossroads.")
#         break
#
#     if token == 'green':
#
#         green_time = green_light_seconds
#         passSeconds = free_window_seconds
#
#         while green_time > 0 and len(cars) != 0:
#
#             car_name = cars.popleft()
#             green_time -= len(car_name)
#
#             if green_time >= 0:
#                 cars_passed += 1
#                 continue
#
#             passSeconds += green_time
#
#             if passSeconds < 0:
#                 print('A crash happened!')
#                 print(f'{car_name} was hit at {car_name[len(car_name)+passSeconds]}.')
#                 crushed = True
#                 break
#
#             cars_passed += 1
#
#     if crushed:
#         break
#
#     car_model = token
#     cars.append(car_model)

# 2

from collections import deque

green_light = int(input())
window = int(input())
cars = deque()
command = input()
crashed = False
cars_counter = 0

while command != 'END':
    if command == 'green':
        if cars:
            current = cars.popleft()
            seconds_left = green_light - len(current)

            while seconds_left > 0:
                cars_counter += 1
                if cars:
                    current = cars.popleft()
                    seconds_left -= len(current)
                else:
                    break

            if seconds_left == 0:
                cars_counter += 1

            if window >= abs(seconds_left):
                if seconds_left < 0:
                    cars_counter += 1
            else:
                index = window + seconds_left
                print('A crash happened!')
                print(f'{current} was hit at {current[index]}.')
                crashed = True
                break
    else:
        cars.append(command)
    command = input()

if not crashed:
    print("Everyone is safe.")
    print(f"{cars_counter} total cars passed the crossroads.")
