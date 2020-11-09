tokens = input().split()
original_length = len(tokens)


def is_valid(element):
    if element.isdigit():
        number = int(element)
        if number > original_length:
            return True


numbers = map(int, filter(is_valid, tokens))

print(" ".join(map(str, sorted(numbers))))