def squares(n):
    i = 0
    while i < n:
        yield (i+1)**2
        i += 1


print(list(squares(5)))