class Guild:
    def __init__(self, name: str):
        self.name = name
        self.players = []

    def assign_player(self, player):

        if player in self.players:
            return f'Player {player.name} is already in the guild.'

        if player.guild != 'Unaffiliated':
            return f'Player {player.name} is in another guild.'

        player.guild = self.name
        self.players.append(player)
        return f'Welcome player {player.name} to the guild {self.name}'

    def kick_player(self, player_name: str):
        player_list = list(filter(lambda p: p.name == player_name, self.players))

        if not player_list:
            return f'Player {player_name} is not in the guild.'

        player = player_list[0]
        player.guild = 'Unaffiliated'
        self.players.remove(player)
        return f"Player {player_name} has been removed from the guild."

    def guild_info(self):
        info = f'Guild: {self.name}\n'
        info += "".join([player.player_info() for player in self.players])
        return info

