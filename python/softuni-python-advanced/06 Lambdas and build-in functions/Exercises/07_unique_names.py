names = map(lambda x: x, input().split())


def is_valid(name):
    valid_first_letter = name[0].isupper()
    valid_rest_letters = len(name[1:]) == len(list(filter(lambda x: x.islower(),name[1:])))
    return valid_first_letter and valid_rest_letters


correct_names = filter(is_valid, names)
correct_names_lengths = map(lambda x: len(x), correct_names)
print(sum(correct_names_lengths))