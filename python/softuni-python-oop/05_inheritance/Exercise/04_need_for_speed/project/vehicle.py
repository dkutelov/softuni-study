class Vehicle:
    DEFAULT_FUEL_CONSUMPTION = 1.25

    def __init__(self, fuel: float, horse_power: float):
        self.fuel = fuel
        self.horse_power = horse_power
        self.fuel_consumption = Vehicle.DEFAULT_FUEL_CONSUMPTION

    def drive(self, kilometers):
        needed_fuel = kilometers * self.fuel_consumption

        if needed_fuel <= self.fuel:
            self.fuel -= (kilometers * self.fuel_consumption)
