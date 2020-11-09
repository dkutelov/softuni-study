from project.player.player import Player


class PlayerRepository:
    def __init__(self):
        self.players = []

    @property
    def count(self):
        return len(self.players)

    def add(self, player: Player):
        if any(p.username == player.username for p in self.players):
            raise ValueError(f"Player {player.username} already exists!")

        self.players.append(player)

    def remove(self, player_name: str):
        if player_name == '':
            raise ValueError("Player cannot be an empty string!")

        player_to_remove = self.find(player_name)
        self.players.remove(player_to_remove)

    def find(self, player_name: str):
        return [player for player in self.players if player.username == player_name][0]
