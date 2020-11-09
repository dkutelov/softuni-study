def execute(f, *args):
    return f(*args)


def test_func(name, age):
    return f"I am {name} and I am {age} years old"

res = execute(test_func, "Tanya", 22)

print(res)