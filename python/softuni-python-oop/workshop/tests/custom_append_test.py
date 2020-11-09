import unittest

from project.custom_list import CustomList
from workshop.tests.custom_list_test_base import CustomListTestBase


class CustomListAppendTest(CustomListTestBase):
    def test_append_whenEmpty_shouldAppendElement(self):
        value = 5
        cl = CustomListAppendTest.setup_list()
        actual = cl.append(5)

        self.assertListEqual(actual, [value])

    def test_append_whenTwoElements_shouldAppendElements(self):
        result = CustomListAppendTest.setup_list(5, 10)
        self.assertListEqual(result, [5, 10])


if __name__ == '__main__':
    unittest.main()