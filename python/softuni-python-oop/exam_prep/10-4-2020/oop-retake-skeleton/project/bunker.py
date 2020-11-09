from project.medicine.medicine import Medicine
from project.supply.supply import Supply
from project.survivor import Survivor


class Bunker:
    def __init__(self):
        self.survivors = []
        self.supplies = []
        self.medicine = []

    @property
    def food(self):
        food_supplies = [supply for supply in self.supplies if supply.__class__.__name__ == 'FoodSupply']
        if len(food_supplies) == 0:
            raise IndexError('There are no food supplies left!')
        return food_supplies

    @property
    def water(self):
        water_supplies = [supply for supply in self.supplies if supply.__class__.__name__ == 'WaterSupply']
        if len(water_supplies) == 0:
            raise IndexError('There are no water supplies left!')
        return water_supplies

    @property
    def painkillers(self):
        painkillers_supplies = [medicine for medicine in self.medicine if medicine.__class__.__name__ == 'Painkiller']
        if len(painkillers_supplies) == 0:
            raise IndexError('There are no painkillers left!')
        return painkillers_supplies

    @property
    def salves(self):
        salve_supplies = [medicine for medicine in self.medicine if medicine.__class__.__name__ == 'Salve']
        if len(salve_supplies) == 0:
            raise IndexError('There are no salves left!')
        return salve_supplies

    def add_survivor(self, survivor: Survivor):
        survivor_exists = [s for s in self.survivors if s.name == survivor.name]
        if survivor_exists:
            raise ValueError(f'Survivor with name {survivor.name} already exists.')
        self.survivors.append(survivor)

    def add_supply(self, supply: Supply):
        self.supplies.append(supply)

    def add_medicine(self, medicine: Medicine):
        self.medicine.append(medicine)

    def heal(self, survivor: Survivor, medicine_type: str):
        needed_medicine = None
        if medicine_type == 'Painkiller':
            try:
                needed_medicine = self.painkillers[-1]
            except Exception(IndexError) as ex:
                pass
        elif medicine_type == 'Salve':
            try:
                needed_medicine = self.salves[-1]
            except Exception(IndexError) as ex:
                pass

        if needed_medicine and survivor.needs_healing:
            self.medicine.remove(needed_medicine)
            needed_medicine.apply(survivor)
            return f'{survivor.name} healed successfully with {medicine_type}'

    def sustain(self, survivor: Survivor, sustenance_type: str):
        current_sustenance = None
        for s in self.supplies[::-1]:
            if s.__class__.__name__ == sustenance_type:
                current_sustenance = s
                break

        if current_sustenance and survivor.needs_sustenance:
            self.supplies.remove(current_sustenance)
            current_sustenance.apply(survivor)

            return f'{survivor.name} sustained successfully with {sustenance_type}'

    def next_day(self):
        for survivor in self.survivors:
            survivor.needs -= survivor.age * 2
            self.sustain(survivor, 'FoodSupply')
            self.sustain(survivor, 'WaterSupply')
