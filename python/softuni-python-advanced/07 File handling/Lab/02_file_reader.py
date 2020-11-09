file_path = './08-File-Handling-Lab-Resources/File Reader/numbers.txt'


def calculate_sum_loop(file_path):
    file = open(file_path, 'r')
    result = 0
    for line in file:
        result += int(line)
    return result


def calculate_sum_readline(file_path):
    file = open(file_path, 'r')
    result = 0

    while True:
        number_str = file.readline()
        if not number_str:
            break
        result += int(number_str)
    return result

print(calculate_sum_readline(file_path))