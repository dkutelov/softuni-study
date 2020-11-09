from collections import deque


def solve(food, orders):
    orders_que = deque(orders)

    print(max(orders))

    while orders_que:
        current_order = orders_que.popleft()

        if food >= current_order:
            food -= current_order
        else:
            orders_que.appendleft(current_order)
            print(f'Orders left: {" ".join([str(n) for n in orders_que])}')
            break

    if not orders_que:
        print('Orders complete')


daily_food = int(input())
orders = [int(order) for order in input().split()]

solve(daily_food, orders)



# def solve(food, orders):
#     orders_que = deque()
#     [orders_que.append(order) for order in orders]
#
#     max_oder = float('-inf')
#     orders_left = []
#     is_food = True
#
#     for _ in range(len(orders_que)):
#         current_order = orders_que.popleft()
#         max_oder = max(max_oder, current_order)
#         if current_order <= food and is_food:
#             food -= current_order
#         else:
#             is_food = False
#             orders_left.append(current_order)
#
#     print(f'{max_oder}')
#
#     if len(orders_left) == 0:
#         print('Orders complete')
#     else:
#         print(f'Orders left: {" ".join([str(n) for n in orders_left])}')
#
#
# daily_food = int(input())
# orders = [int(order) for order in input().split()]
#
# solve(daily_food, orders)