from project.card.card import Card


class CardRepository:
    def __init__(self):
        self.cards = []

    @property
    def count(self):
        return len(self.cards)

    def add(self, card: Card):
        if any(card.name == c.name for c in self.cards):
            raise ValueError(f"Card {card.name} already exists!")

        self.cards.append(card)

    def remove(self, card_name: str):
        if card_name == '':
            raise ValueError("Card cannot be an empty string!")

        card_to_remove = self.find(card_name)
        self.cards.remove(card_to_remove)

    def find(self, card_name: str):
        return [card for card in self.cards if card.name == card_name][0]

