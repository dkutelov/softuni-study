# 1
# input_characters = list(input())
# unique_characters = set(input_characters)
#
# for character in sorted(unique_characters):
#     print(f'{character}: {input_characters.count(character)} time/s')

# 2
text = input()

occurrence = {}

for element in text:
    occurrence.setdefault(element, 0)
    occurrence[element] += 1

for (k,v) in sorted(occurrence.items()):
    print(f'{k}: {v} time/s')