def flatten_lists(list_of_lists):
    result = [el for row in reversed(list_of_lists) for el in row]
    print(" ".join(result))


list_of_lists = [el.split() for el in input().split('|')]
flatten_lists(list_of_lists)
