from project.supply.supply import Supply


class FoodSupply(Supply):
    def __init__(self):
        Supply.__init__(self, needs_increase=20)

