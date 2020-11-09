from project.card.trap_card import TrapCard
import unittest


class TestMagicCard(unittest.TestCase):
    def test_init_should_create_correct_attributes(self):
        card = TrapCard('test')
        self.assertEqual(card.name, 'test')
        self.assertEqual(card.health_points, 5)
        self.assertEqual(card.damage_points, 120)


if __name__ == '__main__':
    unittest.main()