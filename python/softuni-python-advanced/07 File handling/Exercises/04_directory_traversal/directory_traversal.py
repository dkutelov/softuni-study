# for Linux or Mac comment line 24 and uncomment line 25
from os import walk, path, environ

directory_path = input()

sep_count = directory_path.count(path.sep)
result_dict = {}

for root, dirs, files in walk(directory_path):
    if root.count(path.sep) - sep_count > 1:
        continue
    for file in files:
        extension = file.split('.')[-1]
        if extension not in result_dict:
            result_dict[extension] = []
        result_dict[extension].append(file)

result_string = ""
for key, value in sorted(result_dict.items()):
    result_string += f".{key}\n"
    for file in sorted(value):
        result_string += f"---{file}\n"

desktop = path.join(path.join(environ['USERPROFILE']), 'Desktop') # comment for Linux and Mac
#desktop = path.join(path.join(path.expanduser('~')), 'Desktop') # uncommend for Linux and Mac

final_location = desktop + path.sep + "report.txt"

with open(final_location, "w") as file:
    file.write(result_string)