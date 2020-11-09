def get_heroes():
    return {hero: {} for hero in input().split(', ')}


def get_armor_and_prices(heroes):
    while True:
        tokens = input().split('-')

        if tokens[0] == 'End':
            break

        name, armor, price = tokens

        if name in heroes and armor not in heroes[name]:
            heroes[name][armor] = int(price)
    return heroes


def main():
    heroes = get_heroes()
    armed_heroes = get_armor_and_prices(heroes)
    [print(f'{hero} -> Items: {len(armors)}, Cost: {sum(armors.values())}') for hero, armors in armed_heroes.items()]


main()
