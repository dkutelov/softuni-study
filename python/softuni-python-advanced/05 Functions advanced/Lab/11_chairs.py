# def combinations(start, end, k, combination=[]):
#     # take one number
#     # 1, 2 ; 1, 3; 1, 4
#     # take out 1
#     # 2, 3; 2, 4;
#     # 3, 4
#     if len(combination) == k:
#         print(combination)
#         return
#     for x in range(start,end):
#         combination.append(x)
#         combinations(x + 1, end, k, combination)
#         combination.pop()
#
#
# combinations(1,4,2)


def combinations(names, chairs, comb=[]):

    if len(comb) == chairs:
        print(', '.join(comb))
        return

    for i in range(len(names)):
        comb.append(names[i])
        combinations(names[i+1:], chairs, comb)
        comb.pop()


names = input().split(', ')
chairs = int(input())
combinations(names, chairs)