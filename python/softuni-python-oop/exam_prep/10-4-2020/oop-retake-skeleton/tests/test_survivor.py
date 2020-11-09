import unittest

from project.survivor import Survivor


class TestSurvivor(unittest.TestCase):
    def setUp(self) -> None:
        self.survivor = Survivor('name', 50)

    def test_name_when_valid_should_set_name(self):
        self.survivor.name = 'name 1'
        self.assertEqual(self.survivor.name, 'name 1')

    def test_name_when_invalid_should_raise(self):
        with self.assertRaises(ValueError) as context:
            self.survivor.name = ''
        self.assertEqual(str(context.exception), 'Name not valid!')

    def test_age_when_valid_should_set_age(self):
        self.survivor.age = 10
        self.assertEqual(self.survivor.age, 10)

    def test_age_when_invalid_should_raise(self):
        with self.assertRaises(ValueError) as context:
            self.survivor.age = -10
        self.assertEqual(str(context.exception), 'Age not valid!')

    def test_health_when_initialize_should_set_100(self):
        self.assertEqual(self.survivor.health, 100)

    def test_health_when_above_max_should_set_100(self):
        self.survivor.health = 200
        self.assertEqual(self.survivor.health, 100)

    def test_health_when_negative_should_raise(self):
        with self.assertRaises(ValueError) as context:
            self.survivor.health = -10
        self.assertEqual(str(context.exception), 'Health not valid!')

    def test_needs_when_initialize_should_set_100(self):
        self.assertEqual(self.survivor.needs, 100)

    def test_needs_when_above_max_should_set_100(self):
        self.survivor.needs = 200
        self.assertEqual(self.survivor.needs, 100)

    def test_needs_when_negative_should_raise(self):
        with self.assertRaises(ValueError) as context:
            self.survivor.needs = -10
        self.assertEqual(str(context.exception), 'Needs not valid!')

    def test_need_stance_when_under_100_should_return_true(self):
        self.survivor.needs = 90
        self.assertTrue(self.survivor.needs_sustenance)

    def test_need_stance_when_100_should_return_false(self):
        self.assertFalse(self.survivor.needs_sustenance)

    def test_need_healing_when_under_100_should_return_true(self):
        self.survivor.health = 90
        self.assertTrue(self.survivor.needs_healing)
    
    def test_need_healing_when_100_should_return_false(self):
        self.assertFalse(self.survivor.needs_healing)


if __name__ == '__main__':
    unittest.main()
