class Trainer:
    def __init__(self, name):
        self.name = name
        self.pokemon = []

    def add_pokemon(self, pokemon):
        if pokemon in self.pokemon:
            return 'This pokemon is already caught'

        self.pokemon.append(pokemon)
        return f'Caught {pokemon.pokemon_details()}'

    def release_pokemon(self, pokemon_name):
        pokemon_list = list(filter(lambda p: p.name == pokemon_name, self.pokemon))

        if not pokemon_list:
            return 'Pokemon is not caught'

        current_pokemon = pokemon_list[0]
        self.pokemon.remove(current_pokemon)
        return f'You have released {current_pokemon.name}'

    def trainer_data(self):
        trainer_info = f'Pokemon Trainer {self.name}\n'
        trainer_info += f'Pokemon count {len(self.pokemon)}\n'
        if self.pokemon:
            trainer_info += "\n".join([f'- {pokemon.pokemon_details()}' for pokemon in self.pokemon])
            trainer_info += "\n"
        return trainer_info

