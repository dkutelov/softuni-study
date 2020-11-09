from project.extended_list import IntegerList

import unittest


class TestsIntegerList(unittest.TestCase):
    def test_init_with_no_arguments_should_create_empty_data(self):
        data = []
        integer_list = IntegerList(*data)
        expected_result = []
        actual = integer_list._IntegerList__data
        self.assertEqual(actual, expected_result, 'Error when initiated with empty data')

    def test_init_with_int_arguments_should_add_elements_to_data(self):
        data = [1, 2, 3]
        integer_list = IntegerList(*data)
        expected_result = [1, 2, 3]
        actual = integer_list._IntegerList__data
        self.assertEqual(actual, expected_result, 'Incorrect when initiated with int data')

    def test_init_with_non_int_arguments_should_not_add_elements_to_data(self):
        data = ['Peter', 2, 3]
        integer_list = IntegerList(*data)
        expected_result = [2, 3]
        actual = integer_list._IntegerList__data
        self.assertEqual(actual, expected_result, 'Init with non int arguments should not add element to_data')

    def test_get_data_method_should_return_data_attribute(self):
        data = [1, 2, 3]
        integer_list = IntegerList(*data)
        expected_result = integer_list._IntegerList__data
        actual = integer_list.get_data()
        self.assertEqual(actual, expected_result, 'Get_data method should return data attribute')

    # def test_integerListInit_whenNotOnlyIntegers_raiseException(self):
    #     with self.assertRaises(Exception) as context:
    #         IntegerList(1, 2, 3, 4, 5)
    #     self.assertIsNotNone(context.exception)

    def test_integerListInit_whenOnlyIntegers_shouldStoreThem(self):
        values = [1, 2, 3, 4, 5]
        il = IntegerList(*values)

        self.assertListEqual(values, il.get_data())

    def test_integerListAdd_whenValueIsInteger_shouldBeAdded(self):
        il = IntegerList()
        il.add(1)
        self.assertListEqual([1], il.get_data())

    def test_integerListAdd_whenValueNotIsInteger_shouldRaise(self):
        il = IntegerList()
        with self.assertRaises(Exception) as context:
            il.add({})
        self.assertIsNotNone(context.exception)

    def test_integerListRemoveIndex_whenIndexIsValid_shouldRemoveElementAndReturnIt(self):
        il = IntegerList(1, 2, 3, 4)
        expected = 2
        returned = il.remove_index(1)
        self.assertListEqual([1, 3, 4], il.get_data())
        self.assertEqual(expected, returned)

    def test_integerListRemoveIndex_whenIndexNotValid_shouldRaise(self):
        il = IntegerList(1, 2, 3, 4)

        with self.assertRaises(Exception) as context:
            il.remove_index(len(il.get_data()))
        self.assertIsNotNone(context.exception)

    def test_integerListGet_whenIndexIsValid_shouldReturnIt(self):
        il = IntegerList(1, 2, 3, 4)
        expected = 2
        returned = il.get(1)

        self.assertEqual(expected, returned)

    def test_integerListGet_whenIndexNotValid_shouldRaise(self):
        il = IntegerList(1, 2, 3, 4)

        with self.assertRaises(Exception) as context:
            il.get(len(il.get_data()))
        self.assertIsNotNone(context.exception)

    def test_integerListGetBiggest_shouldReturnMaxValue(self):
        il = IntegerList(1, 2, 3, 4)
        returned = il.get_biggest()

        self.assertEqual(4, returned)

    def test_integerListGetIndex_shouldReturnIndexOfElement(self):
        il = IntegerList(1, 2, 3, 4)
        returned = il.get_index(2)

        self.assertEqual(1, returned)

    def test_integerListInsert_whenIndexIsValid_shouldInsertIt(self):
        il = IntegerList(1, 2, 3, 4)
        il.insert(2, -1)

        self.assertEqual([1, 2, -1, 3, 4], il.get_data())

    def test_integerListInsert_whenIndexNotValid_shouldRaise(self):
        il = IntegerList(1, 2, 3, 4)

        with self.assertRaises(Exception) as context:
            il.insert(len(il.get_data()), -1)
        self.assertIsNotNone(context.exception)

    def test_integerListInsert_whenValueIsNotInteger_shouldRaise(self):
        il = IntegerList(1, 2, 3, 4)

        with self.assertRaises(Exception) as context:
            il.get(0, True)
        self.assertIsNotNone(context.exception)


if __name__ == "__main__":
    unittest.main()