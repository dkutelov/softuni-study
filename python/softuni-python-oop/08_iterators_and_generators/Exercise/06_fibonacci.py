import sys

# def fibonacci():
#     yield 0
#     yield 1
#     previous_two = [0, 1]
#     for n in range(1, sys.maxsize):
#         current_num = sum(previous_two)
#         previous_two = [previous_two[1], current_num]
#         yield current_num

def fibonacci():
    previous_num = 0
    current_num = 1
    while True:
        yield previous_num
        previous_num, current_num = current_num, previous_num + current_num


generator = fibonacci()
for i in range(10):
    print(next(generator))
