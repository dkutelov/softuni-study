def is_prime(n):
    for i in range(2, n):
        if n % i == 0:
            return False
    return True


def get_primes(initial_list):
    for num in initial_list:
        if is_prime(num) and num > 1:
            yield num


print(list(get_primes([2, 4, 3, 5, 6, 9, 1, 0])))