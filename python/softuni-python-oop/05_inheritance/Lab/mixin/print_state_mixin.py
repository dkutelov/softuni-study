class PrintStateMixin:
    def print_state(self):
        print(f'-----{self.__class__.__name__}-----')
        for k, v in self.__dict__.items():
            print(f'{k} = {v}')
        print(f'-----------------------------------')

    def __repr__(self):
        lines = [f'-----{self.__class__.__name__}-----']
        for k, v in self.__dict__.items():
            lines.append(f'{k} = {v}')
        lines.append(f'-----------------------------------')
        return "\n".join(lines)