file_path = "text1.txt"

with open(file_path, "r") as file:
    for i, line in enumerate(file):
        if i % 2 == 0:
            for char in '-,.!?':
                line = line.replace(char, '@')
            words = reversed(line.split())
            print(' '.join(words))
