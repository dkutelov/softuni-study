def permutations(idx, text):

    if idx >= len(text):
        print("".join(text))
        return

    permutations(idx + 1, text)

    for i in range(idx + 1, len(text)):
        text[idx], text[i] = text[i], text[idx]
        permutations(idx + 1, text)
        text[idx], text[i] = text[i], text[idx]


my_string = list(input())
permutations(0, my_string)