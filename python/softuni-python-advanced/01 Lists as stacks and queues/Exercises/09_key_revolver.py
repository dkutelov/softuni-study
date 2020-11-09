from collections import deque

# inputs
bullet_price = int(input())
gun_barrel_size = int(input())
bullets = [int(bullet) for bullet in input().split()]
locks = [int(lock) for lock in input().split()]
intelligence_value = int(input())

locks = deque(locks)


def shoot_bullet():
    bullet = bullets.pop()
    lock = locks.popleft()
    if bullet > lock:
        print("Ping!")
        locks.appendleft(lock)
        return
    print("Bang!")


count = 0

while True:
    shoot_bullet()
    count += 1

    if not bullets and locks:
        print(f"Couldn't get through. Locks left: {len(locks)}")
        break

    if count % gun_barrel_size == 0 and bullets:
        print('Reloading!')

    if not locks:
        bullet_cost = count * bullet_price
        print(f"{len(bullets)} bullets left. Earned ${intelligence_value - bullet_cost}")
        break
