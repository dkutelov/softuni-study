from project.card.card import Card


class TrapCard(Card):
    def __init__(self, name):
        Card.__init__(self, name=name, damage_points=120, health_points=5)
