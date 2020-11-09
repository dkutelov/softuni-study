import unittest
from workshop.project.custom_list import CustomList


class CustomListTestBase(unittest.TestCase):
    def setup_list(self, *args):
        cl = CustomList()
        [cl.append(x) for x in args]
        return cl


