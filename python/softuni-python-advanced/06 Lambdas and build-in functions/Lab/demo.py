# one row
# anonymous
x = lambda: print(sum([1, 2, 3, 4]))

x()

print(x.__name__)
#<lambda>

my_list = list(range(5, 0, -1))
print(my_list)
my_list2 = list(map(lambda el: el + 1, my_list))
print(my_list2)
my_list3 = [element + 1 for element in my_list]


def increment(x):
    return x + 1


my_list4 = list(map(increment, my_list))

sum_lambda = lambda xx, yy : xx + yy


sorted_list = sorted(my_list, key=lambda x: x % 4)
print(sorted_list)


my_dict = {
    'a': 1,
    'b': 2,
    'c': 3
}


def order_by(pair):
    key, value = pair
    return value, key


sorted_dict = sorted(my_dict.items(), key=order_by)
print('sorted dict')
print(sorted_dict)
