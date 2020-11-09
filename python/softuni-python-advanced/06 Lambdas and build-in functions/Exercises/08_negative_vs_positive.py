numbers = list(map(int, input().split()))

sum_negative_numbers = sum(filter(lambda x: x < 0, numbers))
print(sum_negative_numbers)

sum_positive_numbers = sum(filter(lambda x: x >= 0, numbers))
print(sum_positive_numbers)

if abs(sum_negative_numbers) > sum_positive_numbers:
    print("The negatives are stronger than the positives")
else:
    print("The positives are stronger than the negatives")