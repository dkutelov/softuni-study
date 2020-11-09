def read_input(n):
    return [input() for _ in range(n)]


def get_name_value(name):
    name_value = sum([ord(ch) for ch in name])
    return name_value


names = read_input(int(input()))

name_values = [get_name_value(names[i-1]) // i for i in range(1, len(names) + 1)]

odd_set = set([value for value in name_values if value % 2 != 0])

even_set = set([value for value in name_values if value % 2 == 0])

odd_sum = sum(odd_set)
even_sum = sum(even_set)

if odd_sum == even_sum:
    union_values = odd_set | even_set
    print(", ".join([str(x) for x in union_values]))
elif odd_sum > even_sum:
    different_values = odd_set - even_set
    print(", ".join([str(x) for x in different_values]))
else:
    symmetric_difference = odd_set ^ even_set
    print(", ".join([str(x) for x in symmetric_difference]))