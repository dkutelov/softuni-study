def fix_calendar(dates):
    is_swap = False
    while not is_swap:
        is_swap = True
        for i in range(len(dates) - 1):
            if dates[i] > dates[i+1]:
                dates[i], dates[i+1] = dates[i+1], dates[i]
                is_swap = False
    return dates


fixed = fix_calender([1,2,3])
print(fixed)