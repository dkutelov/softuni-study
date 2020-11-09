input_file_path = "text2.txt"
output_file_path = "output2.txt"
result_text = ""

with open(input_file_path, "r") as file:
    for i, line in enumerate(file):
        length = len([el for el in line if el.isalpha()])
        counter = 0
        for el in line:
            if el in ",.!?\"';:-":
                counter += 1
        result_text += f"Line {i + 1}: {line[:-1]} ({length})({counter})\n"

with open(output_file_path, "w") as file:
    file.write(result_text)
