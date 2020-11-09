from project.vehicle.vehicle import Vehicle


class Bus(Vehicle):
    def __init__(self, available_seats: int, ticket_price: float):
        Vehicle.__init__(self, available_seats)
        self.ticket_price = ticket_price
        self.tickets_sold = 0

    def get_ticket(self, tickets_count):
        result = self.get_capacity(self.available_seats, tickets_count)
        if not isinstance(result, str):
            self.available_seats -= tickets_count
            self.tickets_sold += tickets_count
        return result

    def get_total_profit(self):
        return self.tickets_sold * self.ticket_price
