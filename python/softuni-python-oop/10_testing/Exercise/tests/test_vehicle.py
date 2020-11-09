from project.vehicle import Car, Truck

import unittest


class TestCar(unittest.TestCase):
    def setUp(self):
        self.car = Car(100, 3)

    def test_init_whenValidArguments_shouldCreate(self):
        self.assertEqual(100, self.car.fuel_quantity)
        self.assertEqual(3, self.car.fuel_consumption)

    def test_carDrive_whenEnoughFuel_shouldDriveAndDecreaseFuelQuantity(self):
        distance = 10
        self.car.drive(distance)

        self.assertEqual(61, self.car.fuel_quantity)

    def test_carDrive_whenNotEnoughFuel_shouldNotDriveAndNotDecreaseFuelQuantity(self):
        distance = 40
        self.car.drive(distance)

        self.assertEqual(100, self.car.fuel_quantity)

    def test_carRefuel_shouldIncreaseFuelQuantity(self):
        self.car.refuel(1)

        self.assertEqual(101, self.car.fuel_quantity)


class TestTruck(unittest.TestCase):
    def setUp(self):
        self.truck = Truck(100, 6)

    def test_truckDrive_whenEnoughFuel_shouldDriveAndDecreaseFuelQuantity(self):
        distance = 10
        self.truck.drive(distance)

        self.assertEqual(24, self.truck.fuel_quantity)

    def test_truckDrive_whenNotEnoughFuel_shouldNotDriveAndNotDecreaseFuelQuantity(self):
        distance = 40
        self.truck.drive(distance)

        self.assertEqual(100, self.truck.fuel_quantity)

    def test_truckRefuel_shouldIncreaseFuelQuantity(self):
        self.truck.refuel(1)

        self.assertEqual(100.95, self.truck.fuel_quantity)


if __name__ == '__main__':
    unittest.main()
