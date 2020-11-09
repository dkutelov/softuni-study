import os


def create_file(tokens):
    file_name = tokens[1]
    with open(file_name, "w") as file:
        file.write("")


def add_to_file(tokens):
    file_name, file_content = tokens[1:]
    with open(file_name, "a") as file:
        file.write(file_content)
        file.write("\n")


def replace_content(tokens):
    file_name, old_string, new_string = tokens[1:]
    if os.path.exists(file_name):
        with open(file_name, 'r') as file:
            text = file.read()
            text = text.replace(old_string, new_string)
        with open(file_name, 'w') as file:
            file.write(text)
    else:
        print("An error occurred")


def delete_file(tokens):
    file_name = tokens[1]
    if os.path.exists(file_name):
        os.remove(file_name)
    else:
        print("An error occurred")


FUNC_MAP = {
    "Create": create_file,
    "Add": add_to_file,
    "Replace": replace_content,
    "Delete": delete_file
}

while True:
    tokens = input().split('-')
    command = tokens[0]
    if tokens[0] == 'End':
        break
    FUNC_MAP[command](tokens)