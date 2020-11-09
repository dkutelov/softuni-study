import sys

def solution():
    def integers():
        for n in range(1, sys.maxsize):
            yield n

    def halves():
        for i in integers():
            yield i / 2

    def take(n, seq):
        result = []
        for i in seq:
            result.append(i)
            if len(result) == n:
                break
        return result

    return take, halves, integers


take = solution()[0]
halves = solution()[1]
print(take(5, halves()))
