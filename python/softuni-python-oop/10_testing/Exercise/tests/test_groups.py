from project.groups import Person, Group

import unittest


class TestPerson(unittest.TestCase):
    def setUp(self) -> None:
        self.person_1 = Person("Name", "Surname")
        self.person_2 = Person("Name 2", "Surname 2")

    def test_set_attributes(self):
        self.assertEqual("Name", self.person_1.name)
        self.assertEqual("Surname", self.person_1.surname)

    def test_custom_add(self):
        result = self.person_1 + self.person_2

        self.assertTrue(isinstance(result, Person))
        self.assertEqual('Name', result.name)
        self.assertEqual('Surname 2', result.surname)
        self.assertEqual('Name Surname 2', f'{result}')

    def test_custom_str(self):
        result = str(self.person_1)
        self.assertIn('Name', result)
        self.assertNotIn('Person', result)
        self.assertEqual('Name Surname', result)

    def test_custom_repr(self):
        result = repr(self.person_1)
        self.assertIn('Name', result)
        self.assertEqual('Person 0: Name Surname', result)


class TestGroup(unittest.TestCase):
    def setUp(self) -> None:
        self.person_1 = Person("Name", "Surname")
        self.person_2 = Person("Name 2", "Surname 2")
        self.group = Group('test group name', [self.person_1, self.person_2])

    def test_custom_len(self):
        result = len(self.group)
        self.assertEqual(2, result)

    def test_custom_add(self):
        person_3 = Person('Third', 'Third 2')
        group_2 = Group('test2', [person_3])

        group_3 = self.group + group_2

        self.assertTrue(isinstance(group_3, Group))
        self.assertEqual(len(group_3), 3)
        self.assertListEqual([self.person_1, self.person_2, person_3], group_3.people)

    def test_init_whenValidArguments_shouldCreate(self):
        first_name = 'name'
        surname = 'surname'
        person = Person(first_name, surname)

        name = 'test group name'
        people = [person]

        group = Group(name, people)

        self.assertEqual(name, group.name)
        self.assertListEqual(people, group.people)

    def test_custom_get_item(self):
        result = self.group[1]
        self.assertIn(f'Person 1: Name 2 Surname 2', result)
        self.assertIn('Name 2', result)

    def test_custom_get_item_invalid_index(self):
        with self.assertRaises(IndexError):
            result = self.group[2]

    def test_custom_str(self):
        #expected = 'Group test group name with members Name Surname, Name 2 Surname 2'
        result = str(self.group)

        #self.assertEqual(expected, result)
        self.assertIn('Group', result)
        self.assertIn('Name', result)
        self.assertIn('Surname', result)
        self.assertNotIn('Third', result)
        self.assertEqual('Group test group name with members Name Surname, Name 2 Surname 2', result)

    def test_custom_repr(self):
        result = repr(self.group)
        self.assertIn("Group", result)
        self.assertIn("Name", result)
        self.assertIn("Surname", result)
        self.assertIn("Name 2", result)
        self.assertIn("Surname 2", result)
        self.assertEqual('Group test group name with members Name Surname, Name 2 Surname 2', result)
        self.assertNotIn('Third', result)

    def test_set_attributes(self):
        self.assertEqual(self.group.name, 'test group name')
        self.assertEqual('Surname', self.person_1.surname)
        self.assertEqual(len(self.group.people), 2)


if __name__ == '__main__':
    unittest.main()

# class TestGroup(unittest.TestCase):
#     def test_init_whenValidArguments_shouldCreate(self):
#         first_name = 'name'
#         surname = 'surname'
#         person = Person(first_name, surname)
#
#         name = 'test group name'
#         people = [person]
#
#         group = Group(name, people)
#
#         self.assertEqual(name, group.name)
#         self.assertListEqual(people, group.people)
#
#     def test_groupAdd_whenTwoValidGroups_shouldCreateNewGroup(self):
#         first_name = 'name'
#         surname = 'surname'
#         person = Person(first_name, surname)
#
#         name = 'test group name'
#         people = [person]
#
#         group = Group(name, people)
#
#         other_person = Person('other first', 'other surname')
#         other_name = 'other group name'
#         other_people = [other_person]
#         other = Group(other_name, other_people)
#
#         actual = group + other
#
#         self.assertTrue(isinstance(actual, Group))
#         self.assertEqual('new group', actual.name)
#         self.assertListEqual([person, other_person], actual.people)
#
#     def test_groupGetItem_shouldReturnPersonAtIndex(self):
#         first_name = 'name'
#         surname = 'surname'
#         person = Person(first_name, surname)
#
#         name = 'test group name'
#         people = [person]
#
#         group = Group(name, people)
#
#         expected = f'Person 0: {person}'
#         actual = group[0]
#
#         self.assertEqual(expected, actual)
#
#     def test_groupLen_shouldReturnNumberOfPeople(self):
#         first_name = 'name'
#         surname = 'surname'
#         person = Person(first_name, surname)
#
#         name = 'test group name'
#         people = [person]
#
#         group = Group(name, people)
#
#         self.assertEqual(len(people), len(group))
#
#     def test_groupStr_shouldReturnRequiredString(self):
#         first_name = 'name'
#         surname = 'surname'
#         person = Person(first_name, surname)
#
#         name = 'test group name'
#         people = [person]
#
#         group = Group(name, people)
#
#         expected = f"Group {name} with members {', '.join([f'{p}'for p in people])}"
#         actual = group.__str__()
#
#         self.assertEqual(expected, actual)