# 1
# def read_until_command(end_command):
#     commands = []
#     while True:
#         command = input()
#         if end_command == command:
#             return commands
#         commands.append(command)
#
# def print_sorted_reservations(reservations):
#     for reservation in sorted(reservations):
#         print(reservation)
#
# def solve(reservations, attended):
#     not_attending = set(reservations).difference(set(attended))
#     vip_not_attending = {n for n in not_attending if n[0].isdigit()}
#     regular_not_attending = not_attending.difference(vip_not_attending)
#     print(len(not_attending))
#     print_sorted_reservations(vip_not_attending)
#     print_sorted_reservations(regular_not_attending)
#
#
# reservations = read_until_command('PARTY')
# attended = read_until_command('END')
#
#
# solve(reservations, attended)

# 2
# def read_until_command(end_command):
#     commands = []
#     while True:
#         command = input()
#         if end_command == command:
#             return commands
#         commands.append(command)
#
#
# def solve(reservations, attended):
#     not_attending = sorted(list(set(reservations).difference(set(attended))))
#     print(len(not_attending))
#     [print(el) for el in not_attending if el[0].isdigit()]
#     [print(el) for el in not_attending if not el[0].isdigit()]
#
#
# reservations = read_until_command('PARTY')
# attended = read_until_command('END')
#
#
# solve(reservations, attended)


def read_first_n(n):
    return [input() for _ in range(n)]


def read_until_command(end_command):
    commands = []
    while True:
        command = input()
        if end_command == command:
            return commands
        commands.append(command)


def solve(reservations, attended):
    not_attending = sorted(list(set(reservations).difference(set(attended))))
    print(len(not_attending))
    [print(el) for el in not_attending if el[0].isdigit()]
    [print(el) for el in not_attending if not el[0].isdigit()]


reservations = read_first_n(int(input()))
attended = read_until_command('END')


solve(reservations, attended)