class CapacityMixin:
    @staticmethod
    def get_capacity(capacity, amount):
        if amount > capacity:
            return "Capacity reached!"
        return capacity - amount


# class CapacityMixin:
#     @staticmethod
#     def get_capacity(capacity, amount):
#         if amount > capacity:
#             raise Exception("Capacity reached!")
#         return capacity - amount
