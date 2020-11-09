class Parent:
    def get_parent(self):
        return 'Parent'


class Child(Parent):
    def get_child(self):
        return 'Child'


class GrandChild(Child):
    def get_grandchild(self):
        return 'Grand Child'
