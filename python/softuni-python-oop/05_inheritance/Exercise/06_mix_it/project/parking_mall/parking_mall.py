from project.capacity_mixin import CapacityMixin


class ParkingMall(CapacityMixin):
    def __init__(self, parking_lots: int):
        self.parking_lots = parking_lots

    def check_availability(self):
        free_lots = self.get_capacity(self.parking_lots, 1)
        if not isinstance(free_lots, str):
            self.parking_lots -= 1
            return f"Parking lots available: {free_lots}"
        return "There are no more parking lots!"
