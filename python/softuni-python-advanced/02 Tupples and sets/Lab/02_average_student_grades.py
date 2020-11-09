def avg(numbers):
    return sum(numbers)/ len(numbers)

def solve(student_grades_strings):
    students_grades = {}

    for student_grade in student_grades_strings:
        name, grade = student_grade.split()
        grade = float(grade)

        if name not in students_grades:
            students_grades[name] = []

        students_grades[name].append(grade)

    for name, grades in students_grades.items():
        grades_str = ' '.join(f'{grade:.2f}' for grade in grades)
        avg_grade = avg(grades)
        print(f'{name} -> {grades_str} (avg: {avg_grade:.2f})')


n = int(input())
student_grades = [input() for _ in range(n)]

solve(student_grades)