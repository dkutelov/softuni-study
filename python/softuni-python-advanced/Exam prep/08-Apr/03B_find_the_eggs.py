def find_strongest_eggs(eggs, sub_list_count):
    best_eggs = []

    for i in range(sub_list_count):
        current = [eggs[idx] for idx in range(i, len(eggs), sub_list_count)]
        mid_element = current[len(current) // 2]
        left_element = current[len(current) // 2 - 1]
        right_element = current[len(current) // 2 + 1]
        if left_element < mid_element > right_element > left_element:
            best_eggs.append(mid_element)

    return best_eggs

