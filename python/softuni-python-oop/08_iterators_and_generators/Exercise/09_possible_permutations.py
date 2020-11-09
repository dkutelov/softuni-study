from itertools import permutations


def possible_permutations(my_list):
    for permutation in permutations(my_list):
        yield list(permutation)


[print(n) for n in possible_permutations([1, 2, 3])]

# def permutations(idx, my_list):
#
#     if idx >= len(my_list):
#         return
#
#     permutations(idx + 1, text)
#
#     for i in range(idx + 1, len(text)):
#         text[idx], text[i] = text[i], text[idx]
#         permutations(idx + 1, text)
#         text[idx], text[i] = text[i], text[idx]
#
#
# my_string = list(input())
# permutations(0, my_string)