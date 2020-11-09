def is_same_list(my_list):
    print(id(my_list))  # 140239966883456 !

    # mutates a
    my_list.append(6)
    return my_list


def do_not_mutate_a(my_list):
    func_list = my_list[:]  # shallow copy
    print(id(func_list))  # 140239985228480 =
    # mutates a
    func_list.append(7)
    return func_list


a = [1, 2, 3, 4, 5]

print(id(a))  # 140239966883456 !
b = is_same_list(a)
print(a)  # a = [1, 2, 3, 4, 5, 6]
print(b)  # a = [1, 2, 3, 4, 5, 6]
print(id(b))  # 140239966883456 !
c = do_not_mutate_a(a)
print(c)  # [1, 2, 3, 4, 5, 6, 7]
print(id(c))  # 140239985228480 =

# comprehension creates shallow copy

d = [10, 20, 30, 40, 50]
print('comprehension')
print(id(d))
e = [n -1 for n in d]
print(e)
print(id(e))

f = [[1,2],[3,4],[5,6]]
g = [n for n in f]
print(g)
f[0].append(11)
print(g[0])