from _collections import deque

bombs = {
    40: 'Datura Bombs',
    60: 'Cherry Bombs',
    120: 'Smoke Decoy Bombs'
}

pouch = {
    'Datura Bombs': 0,
    'Cherry Bombs': 0,
    'Smoke Decoy Bombs': 0
}

materials = ['Effects', 'Casings']
effects = deque([int(x) for x in input().split(', ')])
casing = [int(x) for x in input().split(', ')]


def is_pouch_full():
    bomb_values = [bomb for bomb in pouch.values() if bomb >= 3]
    return len(bomb_values) == 3


def print_material(name):
    if name == 'Effects':
        materials = effects
    else:
        materials = casing

    if materials:
        bomb_result = ", ".join([str(bomb) for bomb in materials])
    else:
        bomb_result = "empty"
    print(f'Bomb {name}: {bomb_result}')


while effects and casing and not is_pouch_full():

    current_effect = effects[0]
    current_casing = casing[-1]
    current_sum = current_effect + current_casing

    if current_sum in bombs:
        bomb_name = bombs[current_sum]
        pouch[bomb_name] += 1
        effects.popleft()
        casing.pop()

    else:
        casing[-1] -= 5

if is_pouch_full():
    print("Bene! You have successfully filled the bomb pouch!")
else:
    print("You don't have enough materials to fill the bomb pouch.")

for material in materials:
    print_material(material)

for bomb_name, val in sorted(pouch.items()):
    print(f'{bomb_name}: {val}')
