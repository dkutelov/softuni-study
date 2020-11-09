expression = list(input())

stack = []
is_valid = True

for ch in expression:
    if ch in '{[(':
        stack.append(ch)
    else:
        if len(stack) > 0:
            if (ch == '}' and stack[-1] == '{') or (ch == ']' and stack[-1] == '[') or (ch == ')' and stack[-1] == '('):
                stack.pop()
                continue
        is_valid = False
        break

if len(stack) == 0 and is_valid:
    print('YES')
else:
    print('NO')


# --

expression = list(input())

stack = []
pairs = {
    '{': '}',
    '[': ']',
    '(': ')'
}
is_valid = True

for ch in expression:
    if ch in '{[(':
        stack.append(ch)
    elif ch in '}])':
        if stack:
            current = stack[-1]
            if pairs[current] == ch:
                stack.pop()
            else:
                is_valid = False
                break
        else:
            is_valid = False
            break

if is_valid:
    print('YES')
else:
    print('NO')