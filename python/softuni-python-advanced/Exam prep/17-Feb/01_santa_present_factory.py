from _collections import deque

boxes = [int(x) for x in input().split()]
magics = deque([int(x) for x in input().split()])


crafted = {
    "Doll": 0,
    "Wooden train": 0,
    "Teddy bear": 0,
    "Bicycle": 0
}

toys = {
    150: "Doll",
    250: "Wooden train",
    300: "Teddy bear",
    400: "Bicycle"
}

while boxes and magics:
    box = boxes.pop()
    magic = magics.popleft()
    total = box * magic

    if box == 0 and magic == 0:
        continue

    if box == 0:
        magics.appendleft(magic)
    if magic == 0:
        boxes.append(box)

    if total in toys:
        toy = toys[total]
        crafted[toy] += 1
    elif total < 0:
        summed = box + magic
        boxes.append(summed)
    elif total > 0:
        boxes.append(box + 15)


if (crafted["Doll"] and crafted["Wooden train"]) or (crafted["Teddy bear"] and crafted["Bicycle"]):
    print("The presents are crafted! Merry Christmas!")
else:
    print("No presents this Christmas!")

if boxes:
    print(f'Materials left: {", ".join(reversed([str(x) for x in boxes]))}')
if magics:
    print(f'Magic left: {", ".join([str(x) for x in magics])}')

for item, qty in sorted(crafted.items()):
    if qty > 0:
        print(f'{item}: {qty}')