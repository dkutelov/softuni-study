def create_sequence(n):
    if n == 0:
        print(0)
        return

    sequence = [0,1]
    for i in range(2,n):
        sequence.append(sequence[i-2] + sequence[i-1])
    print(" ".join(str(x) for x in sequence))


def locate(n):
    x, y = 0, 1
    i = 0

    while x < n:
        x, y = y, x + y
        i += 1

    if x == n:
        print(f'The number - {n} is at index {i}')
    else:
        print('Not found')
