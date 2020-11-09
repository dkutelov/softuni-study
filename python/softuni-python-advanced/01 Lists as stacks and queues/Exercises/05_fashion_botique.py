def arrange_clothes(clothes: list, rack_capacity: int):

    racks = 1
    current_rack = 0

    for _ in range(len(clothes)):

        cloth = clothes.pop()
        new_quantity = current_rack + cloth

        if new_quantity <= rack_capacity:
            current_rack = new_quantity
        else:
            racks += 1
            current_rack = cloth

    return racks


clothes = [int(cloth) for cloth in input().split()]
rack_capacity = int(input())
print(arrange_clothes(clothes, rack_capacity))