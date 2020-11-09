# Use function in comprehension
def transform(n):
    return n ** 2


numbers = [1, 2, 3, 4, 5]

transformed_numbers = [transform(num) for num in numbers]
print(transformed_numbers)

# set comprehension
print({x % 3 for x in numbers})

# dictionary comprehension
info = [('Peter', 22), ('Amy', 18)]
dictionary = {key:value for key, value in info}
print(dictionary)
print({n:n**3 for n in numbers})


# nested comprehension
matrix1 = [[j for j in range(3)] for i in range(3)]

# however better readability with function
def generate_row(size):
    return [j for j in range(size)]


matrix = [generate_row(3) for _ in range(3)]

