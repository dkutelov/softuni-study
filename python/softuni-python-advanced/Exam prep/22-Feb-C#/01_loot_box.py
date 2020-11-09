from collections import deque

first_loot_box = deque(map(int, input().split()))
second_loot_box = list(map(int, input().split()))
claimed_items = 0

while first_loot_box and second_loot_box:
    current_first_number = first_loot_box[0]
    current_second_number = second_loot_box[-1]
    current_sum = current_first_number + current_second_number

    if current_sum % 2 == 0:
        claimed_items += current_sum
        first_loot_box.popleft()
        second_loot_box.pop()
    else:
        current_item = second_loot_box.pop()
        first_loot_box.append(current_item)

if first_loot_box:
    print("Second lootbox is empty")
else:
    print("First lootbox is empty")

if claimed_items >= 100:
    print(f'Your loot was epic! Value: {claimed_items}')
else:
    print(f'Your loot was poor... Value: {claimed_items}')
