from project.card.card import Card


class MagicCard(Card):
    def __init__(self, name):
        Card.__init__(self, name=name, damage_points=5, health_points=80)
