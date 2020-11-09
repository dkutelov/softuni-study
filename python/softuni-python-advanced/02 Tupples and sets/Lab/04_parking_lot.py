parking_lot = set()

n = input()

if n == 'END':
    print('Parking Lot is Empty') # wrong test in Judge
else:
    for _ in range(int(n)):
        command, car = input().split(', ')
        if command == 'IN':
            parking_lot.add(car)
        else:
            if car in parking_lot:
                parking_lot.remove(car)

    if parking_lot:
        [print(car) for car in parking_lot]
    else:
        print('Parking Lot is Empty')