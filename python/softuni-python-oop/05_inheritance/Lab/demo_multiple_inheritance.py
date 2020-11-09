from mixin.print_state_mixin import PrintStateMixin


class Clock(PrintStateMixin):
    def __init__(self, hours, minutes, seconds):
        self.hours = hours
        self.minutes = minutes
        self.seconds = seconds

    @property
    def time(self):
        return f'{self.hours:02d}:{self.minutes:02d}:{self.seconds:02d}'

    def __repr__(self):
        return self.time


class Calendar:
    def __init__(self, year, month, day):
        self.year = year
        self.month = month
        self.day = day

    @property
    def date(self):
        return f'{self.day:02d}/{self.month:02d}/{self.year:02d}'

    def show_date(self):
        print(self)

    def __repr__(self):
        return self.date


class CalendarClock(Clock, Calendar): # repr are overwritten in both parent method, so order is important
    #pass # if no init the Clock init will be called
    def __init__(self, hours, minutes, seconds, year, month, day, ):
        Clock.__init__(self, hours, minutes, seconds)
        Calendar.__init__(self, year, month, day)

    @property
    def show_date_and_time(self):
        return f'{self.time} {self.date}'

    def __repr__(self):
        calendar_repr = Calendar.__repr__(self)
        clock_repr = Clock.__repr__(self)
        return f'{clock_repr} {calendar_repr}'


cc = CalendarClock(18, 0, 0, 2020,7,3)
cc.print_state()
