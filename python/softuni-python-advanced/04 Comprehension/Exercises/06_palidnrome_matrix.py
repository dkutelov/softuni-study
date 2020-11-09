n, m = map(int, input().split())
result = [[f'{chr(i)}{chr(i+j)}{chr(i)}' for j in range(m)] for i in range(97, 97 + n)]
[print(" ".join(row)) for row in result]
