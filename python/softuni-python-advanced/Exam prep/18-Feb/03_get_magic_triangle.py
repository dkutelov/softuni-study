def get_magic_triangle(n):
    magic_triangle = []
    for i in range(1, n + 1):
        row = []
        for j in range(1, i+1):
            if j == 1:
                row.append(1)
            elif j == i:
                row.append(1)
            else:
                row.append(magic_triangle[i-2][j-2] + magic_triangle[i-2][j-1])
        magic_triangle.append(row)

    return magic_triangle


triangle = get_magic_triangle(5)

for row in triangle:
    print(row)

# [1]
# [1, 1]
# [1, 2, 1]
# [1, 3, 3, 1]
# [1, 4, 6, 4, 1]
