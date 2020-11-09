# 1
usernames = [input() for _ in range(int(input()))]
[print(username) for username in set(usernames)]

# 2
[print(username) for username in set([input() for _ in range(int(input()))])]

# 3
n = int(input())
unique_users = set()

for _ in range(n):
    username = input()
    unique_users.add(username)

print("\n".join(unique_users))