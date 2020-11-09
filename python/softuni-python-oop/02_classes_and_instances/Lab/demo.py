# class Car:
#     class_attribute = 5;
#
#     def __init__(self, model, year):
#         self.model = model
#         self.year = year
#
#
# car_1 = Car("7", 2010)
#
#
# class Human:
#     kind = "mammal"
#     spiece = 'human'
#
#     def __init__(self, name):
#         self.name = name


class ExampleClass(object):
  class_attr = 0
  def __init__(self, instance_attr):
    self.instance_attr = instance_attr


foo = ExampleClass(1)
bar = ExampleClass(2)
print(foo.__dict__)
