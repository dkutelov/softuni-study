def find_strongest_eggs(eggs, num):
    sub_lists = []
    strong_eggs = []

    for n in range(num):
        sub_lists.append([])

    sub_list_idx = 0

    while True:
        if not eggs:
            break

        current_egg = eggs.pop(0)
        sub_lists[sub_list_idx].append(current_egg)
        sub_list_idx = (sub_list_idx + 1) % num

    for sub_list in sub_lists:
        middle_idx = len(sub_list)//2
        middle_egg = sub_list[middle_idx]

        if sub_list[middle_idx-1] >= middle_egg or sub_list[middle_idx+1] >= middle_egg:
            continue

        is_strong = True
        step = 1

        while True:
            left_idx = middle_idx - step
            right_idx = middle_idx + step

            if left_idx < 0 or right_idx == len(sub_list):
                break

            if sub_list[left_idx] >= sub_list[right_idx]:
                is_strong = False
                break

            step += 1

        if is_strong:
            strong_eggs.append(middle_egg)

    return strong_eggs


test = ([-1, 7, 3, 15, 2, 12], 2)
print(find_strongest_eggs(*test))

test = ([-1, 0, 2, 5, 2, 3], 2)
print(find_strongest_eggs(*test))

test = ([51, 21, 83, 52, 55], 1)
print(find_strongest_eggs(*test))

