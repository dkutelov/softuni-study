from project import Player, Guild

player = Player("George", 50, 100)
print(player.add_skill("Shield Break", 20))
print(player.player_info())
guild = Guild("UGT")
print(guild.guild_info())
print(guild.assign_player(player))
print(guild.guild_info())
