class Fraction:
    def __init__(self, numerator, denominator):
        self.numerator = numerator
        self.denominator = denominator

    def to_number(self):
        return self.numerator / self.denominator

    def __add__(self, other):
        num = self.numerator * other.denominator + other.numerator * self.denominator
        den = self.denominator * other.denominator
        return Fraction(num, den)

    def __mul__(self, other):
        num = self.numerator * other.numerator
        den = self.denominator * other.denominator
        return Fraction(num, den)


    def __str__(self):
        return f'{self.numerator} / {self.denominator}'

f1 = Fraction(1,2)
f2 = Fraction(3,4)

print(f1.to_number())
print(f2.to_number())

f3 = f1 + f2
print(f3.to_number())
print(f3)

f4 = f1 * f2
print(f4)