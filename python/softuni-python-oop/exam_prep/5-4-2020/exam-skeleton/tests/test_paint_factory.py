import unittest

from project.factory.paint_factory import PaintFactory


class TestPaintFactory(unittest.TestCase):
    def setUp(self) -> None:
        self.pf = PaintFactory('test', 10)

    def test_init_valid_arguments(self):
        self.assertEqual(self.pf.name, 'test')
        self.assertEqual(self.pf.capacity, 10)
        self.assertEqual(self.pf.ingredients, dict())

        self.pf.name = 'test1'
        self.pf.capacity = 100
        self.assertEqual(self.pf.name, 'test1')
        self.assertEqual(self.pf.capacity, 100)

    def test_add_ingredient_when_valid_should_add(self):
        self.pf.add_ingredient('white', 5)
        self.assertDictEqual(self.pf.ingredients, {'white': 5})
        self.pf.add_ingredient('blue', 2)
        self.assertDictEqual(self.pf.ingredients, {'white': 5, 'blue': 2})
        self.pf.add_ingredient('white', 1)
        self.assertDictEqual(self.pf.ingredients, {'white': 6, 'blue': 2})

    def test_add_ingredient_when_invalid_ingredient_should_raise(self):
        with self.assertRaises(TypeError) as context:
            self.pf.add_ingredient('lila', 5)
        self.assertEqual(str(context.exception), "Ingredient of type lila not allowed in test")

    def test_add_ingredient_when_not_capacity_should_raise(self):
        self.pf.ingredients = {'white': 5}
        with self.assertRaises(ValueError) as context:
            self.pf.add_ingredient('white', 6)
        self.assertEqual(str(context.exception), "Not enough space in factory")

    def test_can_add(self):
        self.pf.ingredients = {'white': 5}
        self.assertTrue(self.pf.can_add(2))
        self.assertTrue(self.pf.can_add(5))
        self.assertFalse(self.pf.can_add(6))

    def test_remove_ingredient_when_does_not_exist_should_raise(self):
        with self.assertRaises(KeyError) as context:
            self.pf.remove_ingredient('white', 6)
        self.assertEqual(str(context.exception), f"'No such ingredient in the factory'")

    def test_remove_ingredient_when_higher_quantity_should_raise(self):
        self.pf.ingredients = {'white': 5}
        with self.assertRaises(ValueError) as context:
            self.pf.remove_ingredient('white', 6)
        self.assertEqual(str(context.exception), "Ingredient quantity cannot be less than zero")

    def test_remove_ingredient_when_valid_arguments_should_remove(self):
        self.pf.ingredients = {'white': 5}
        self.pf.remove_ingredient('white', 3)
        self.assertDictEqual(self.pf.ingredients, {'white': 2})
        self.pf.remove_ingredient('white', 2)
        self.assertEqual(self.pf.ingredients, {'white': 0})

    def test_product(self):
        self.pf.add_ingredient('white', 5)
        products = self.pf.products
        self.assertEqual(products, {'white':5})


if __name__ == '__main__':
    unittest.main()
