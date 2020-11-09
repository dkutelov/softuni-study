# 50/50 test, see 07NB

from collections import deque


def get_robots(robots): # name, working time, finish time
    robots_array = []
    for robot in robots:
        robot_name, robot_time = robot.split('-')
        robots_array.append([robot_name, int(robot_time), 0])
    return robots_array


def get_start_time(time):
    h, m, s = time.split(':')
    return int(h) * 3600 + int(m) * 60 + int(s)


def get_products():
    products = deque()
    while True:
        command = input()
        if command == 'End':
            break
        product = command
        products.append(product)
    return products


def format_seconds(seconds):
    hours = seconds // 3600
    seconds -= hours * 3600
    minutes = seconds // 60
    seconds -= minutes * 60
    if hours > 23:
        hours = 0
    return f'{hours:02d}:{minutes:02d}:{seconds:02d}'


def get_free_robot(current_time):
    for robot in robots:
        robot_finish_time = robot[2]
        if robot_finish_time == 0 or robot_finish_time < current_time: # try <=
            return robot


def update_robot_finish_time(current_time, robot, robots):
    current_robot_name = robot[0]
    for i in range(len(robots)):
        if robots[i][0] == current_robot_name:
            robots[i][2] = current_time - 1 + robots[i][1]  # increment robots finish time
    return robots


robots = get_robots(input().split(';'))
current_time = get_start_time(input())
products = get_products()

# current_time = get_start_time('8:00:00')
# robots = get_robots(['ROB-15','SS2-10','NX8000-3'], current_time)
# products = deque(['detail', 'glass', 'wood', 'apple'])

while True:
    current_time += 1

    if not products:
        break

    current_product = products.popleft()

    robot = get_free_robot(current_time)

    if not robot:
        products.append(current_product)
        continue

    robot_name = robot[0]
    robots = update_robot_finish_time(current_time, robot, robots)
    print(f'{robot[0]} - {current_product} [{format_seconds(current_time)}]')
