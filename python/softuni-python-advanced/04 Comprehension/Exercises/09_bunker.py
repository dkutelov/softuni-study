def get_categories():
    return {category_name: {} for category_name in input().split(', ')}


def get_items(category_names):
    stock = category_names
    number_of_items = int(input())
    for _ in range(number_of_items):
        category_name, item, metrics = input().split(' - ')
        quantity, quality = metrics.split(';')
        quantity_data, quality_data = quantity.split(':'), quality.split(':')
        quantity_label, quantity = quantity_data
        quality_label, quality = quality_data
        if category_name in category_names:
            stock[category_name][item] = {quantity_label: int(quantity), quality_label: int(quality)}
    return stock


def print_stock(stock):
    items_quantity = sum([v["quantity"] for item in stock.values() for v in item.values()])
    print(f'Count of items: {items_quantity}')
    items_weighted_quality = sum([v["quality"] for item in stock.values() for v in item.values()]) / len(stock.values())
    print(f'Average quality: {items_weighted_quality:.2f}')
    [print(f'{category} -> {", ".join([item for item in items])}') for category, items in stock.items()]


def main():
    category_names = get_categories()
    stock = get_items(category_names)
    print_stock(stock)


main()