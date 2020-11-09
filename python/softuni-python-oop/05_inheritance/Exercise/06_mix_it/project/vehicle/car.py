from project.vehicle.vehicle import Vehicle


class Car(Vehicle): #4, 50, 5, 30
    def __init__(self, available_seats: int, fuel_tank: int, fuel_consumption: float, fuel: float):
        Vehicle.__init__(self, available_seats)
        self.fuel_tank = fuel_tank
        self.fuel_consumption = fuel_consumption
        self.__fuel = fuel

    @property
    def fuel(self):
        return self.__fuel

    @fuel.setter
    def fuel(self, value):
        if value - self.__fuel < self.fuel_tank:
            self.__fuel = value
        else:
            self.__fuel = self.fuel_tank

    def drive(self, distance):
        drive_fuel = distance * self.fuel_consumption

        if drive_fuel <= self.fuel:
            self.__fuel -= drive_fuel
            return "We've enjoyed the travel!"

    def refuel(self, liters):
        result = self.get_capacity(self.fuel_tank, self.__fuel + liters)

        if not isinstance(result, str):
            self.__fuel += liters
        return self.fuel

