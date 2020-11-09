from project.battle_field import BattleField
from project.card.magic_card import MagicCard
from project.card.trap_card import TrapCard
from project.player.advanced import Advanced
from project.player.beginner import Beginner

import unittest


class TestBattleField(unittest.TestCase):
    def test_fight_with_one_dead_player_should_raise(self):
        attacker = Beginner('Peter')
        enemy = Advanced('Joe')
        attacker.health = 0
        with self.assertRaises(ValueError) as ex:
            BattleField.fight(attacker, enemy)
        self.assertEqual(str(ex.exception), "Player is dead!")

    def test_fight_beginner_should_increase_health(self):
        attacker = Beginner('Peter')
        enemy = Advanced('Joe')
        BattleField.fight(attacker, enemy)
        self.assertEqual(attacker.health, 90)

    def test_fight_attacker_beginner_should_decrease_damage_points_of_cards(self):
        attacker = Beginner('Peter')
        enemy = Advanced('Joe')
        card = MagicCard('Test')
        attacker.card_repository.add(card)
        BattleField.fight(attacker, enemy)
        self.assertEqual(attacker.health, 170)
        self.assertEqual(card.damage_points, 35)

    def test_fight_enemy_beginner_should_increase_health(self):
        attacker = Advanced('Peter')
        enemy = Beginner('Joe')
        card = MagicCard('Test')
        enemy.card_repository.add(card)
        BattleField.fight(attacker, enemy)
        self.assertEqual(enemy.health, 170)

    def test_fight_enemy_beginner_should_decrease_damage_points_of_cards(self):
        attacker = Advanced('Peter')
        enemy = Beginner('Joe')
        card = MagicCard('Test')
        enemy.card_repository.add(card)
        BattleField.fight(attacker, enemy)
        self.assertEqual(enemy.health, 170)
        self.assertEqual(card.damage_points, 35)

    def test_fight_should_decrease_player_health(self):
        attacker = Beginner('Peter')
        enemy = Advanced('Joe')
        attacker_card = MagicCard('Test')
        attacker.card_repository.add(attacker_card)
        enemy_card = TrapCard('Test')
        enemy.card_repository.add(enemy_card)
        BattleField.fight(attacker, enemy)
        self.assertEqual(attacker.health, 50)
        self.assertEqual(enemy.health, 220)

    def test_player_dies_in_fight(self):
        bf = BattleField()
        mg1 = MagicCard("Magic One")
        mg2 = MagicCard("Magic Two")
        p1 = Beginner("Peter")
        p2 = Beginner("George")
        p1.card_repository.add(mg1)
        p1.card_repository.add(mg2)
        bf.fight(p1, p2)
        with self.assertRaises(ValueError) as cm:
            bf.fight(p1, p2)
        self.assertEqual(str(cm.exception), "Player's health bonus cannot be less than zero.")


if __name__ == '__main__':
    unittest.main()
