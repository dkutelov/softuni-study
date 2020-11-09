phonebook = {}


def print_names(n):
    for _ in range(n):
        name = input()
        if name in phonebook:
            print(f'{name} -> {phonebook[name]}')
        else:
            print(f"Contact {name} does not exist.")


while True:
    command = input()

    if len(command) == 1:
        n = int(command)
        print_names(n)
        break

    name, phone = command.split('-')
    phonebook[name] = phone


# old condition
# def read_until_command(end_command):
#     commands = []
#     while True:
#         command = input()
#         if command == end_command:
#             return commands
#         commands.append(command)
#
#
# def solve(phonebook_contacts, searched_contacts):
#     phonebook = {}
#
#     for contact in phonebook_contacts:
#         name, number = contact.split('-')
#         phonebook[name] = number
#
#     for name in searched_contacts:
#         if name in phonebook:
#             print(f"{name} -> {phonebook[name]}")
#         else:
#             print(f"Contact {name} does not exist.")
#
#
#
# phonebook_contacts = read_until_command('search')
# searched_contacts = read_until_command('stop')
#
# solve(phonebook_contacts,searched_contacts)