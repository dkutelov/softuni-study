import unittest

from project.custom_list import CustomList
from project.errors import CustomListIndexException
from workshop.tests.custom_list_test_base import CustomListTestBase


class CustomListRemoveTest(CustomListTestBase):
    # Happy cases
    # [1,2,3,4] - remove at index 2 => [1,2,4]
    def test_remove_index_in_the_middle(self):
        cl = self.setup_list(1, 2, 3, 4)
        result = cl.remove(2)
        self.assertEqual(3, result)
        self.assertListEqual(cl.reverse(), [4, 2, 1])

    # [1], remove at index 0 => []
    def test_remove_index_at_index_zero_one_element(self):
        cl = self.setup_list(1)
        result = cl.remove(0)
        self.assertEqual(1, result)
        self.assertEqual(str(cl), '***  ***')

    # [1,2,3,4] - remove at index 0 => [2,3,4]
    def test_remove_index_at_index_zero(self):
        cl = self.setup_list(1, 2, 3, 4)
        result = cl.remove(0)
        self.assertEqual(1, result)
        self.assertEqual(str(cl), '*** 2; 3; 4 ***')

    # [1,2,3,4] - remove at index len - 1 => [1,2,3]
    def test_remove_index_at_end(self):
        cl = self.setup_list(1, 2, 3, 4)
        result = cl.remove(3)
        self.assertEqual(4, result)
        self.assertEqual(str(cl), '*** 1; 2; 3 ***')

    # [1,2,3,4] - remove at index -1 => [1,2,3]
    def test_remove_index_at_end_neg_index(self):
        cl = self.setup_list(1, 2, 3, 4)
        result = cl.remove(-1)
        self.assertEqual(4, result)
        self.assertEqual(str(cl), '*** 1; 2; 3 ***')

    #unhappy
    # index >= len
    def test_remove_when_index_equals_len_should_raise(self):
        cl = self.setup_list(range(4))
        with self.assertRaises(CustomListIndexException) as context:
            result = cl.remove(4)
        self.assertIsNotNone(context.exception)

    # index is not an int
    # list is empty