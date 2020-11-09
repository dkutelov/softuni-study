from project.card.magic_card import MagicCard
import unittest


class TestMagicCard(unittest.TestCase):
    def setUp(self) -> None:
        self.card = MagicCard('test')

    def test_init_should_create_correct_attributes(self):
        self.assertEqual(self.card.name, 'test')
        self.assertEqual(self.card.health_points, 80)
        self.assertEqual(self.card.damage_points, 5)

    def test_name_when_empty_string_should_raise(self):
        with self.assertRaises(ValueError) as ex:
            self.card.name = ''
        self.assertEqual(str(ex.exception), "Card's name cannot be an empty string.")

    def test_damage_points_when_negative_value_should_raise(self):
        with self.assertRaises(ValueError) as ex:
            self.card.damage_points = -1
        self.assertEqual(str(ex.exception), "Card's damage points cannot be less than zero.")

    def test_health_points_when_negative_value_should_raise(self):
        with self.assertRaises(ValueError) as ex:
            self.card.health_points = -1
        self.assertEqual(str(ex.exception), "Card's HP cannot be less than zero.")

    def test_name_setter_with_correct_string_should_change_name(self):
        mg = MagicCard("It's some kind of magic...")
        mg.name = "Magic Card"
        self.assertEqual(mg.name, "Magic Card")

    def test_damage_setter_with_correct_number_should_change_damage(self):
        mg = MagicCard("It's some kind of magic...")
        mg.damage_points = 10
        self.assertEqual(mg.damage_points, 10)

    def test_health_setter_with_correct_number_should_change_health(self):
        mg = MagicCard("It's some kind of magic...")
        mg.health_points = 10
        self.assertEqual(mg.health_points, 10)


if __name__ == '__main__':
    unittest.main()