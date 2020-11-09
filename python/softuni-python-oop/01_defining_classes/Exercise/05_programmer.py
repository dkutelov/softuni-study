class Programmer:
    def __init__(self, name, language, skills):
        self.name = name
        self.language = language
        self.skills = skills

    def knows_language(self, language):
        return language == self.language

    def watch_course(self, course_name, language, skills_earned):
        if not self.knows_language(language):
            return f'{self.name} does not know {language}'

        self.skills += skills_earned
        return f'{self.name} watched {course_name}'

    def change_language(self, new_language, skills_needed):
        if self.skills < skills_needed:
            return f"{self.name} needs {skills_needed - self.skills} more skills"

        if self.knows_language(new_language):
            return f"{self.name} already knows {new_language}"

        previous_language = self.language
        self.language = new_language
        return f'{self.name} switched from {previous_language} to {self.language}'


programmer = Programmer("John", "Java", 50)
print(programmer.watch_course("Python Masterclass", "Python", 84))
print(programmer.change_language("Java", 30))
print(programmer.change_language("Python", 100))
print(programmer.watch_course("Java: zero to hero", "Java", 50))
print(programmer.change_language("Python", 100))
print(programmer.watch_course("Python Masterclass", "Python", 84))
