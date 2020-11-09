tokens = input().split()
main_colors = ['red', 'blue', 'yellow']
secondary_colors = {'orange': ('red', 'yellow'), 'purple': ('red', 'blue'), 'green': ('blue', 'yellow')}
found_colors = []


def is_color(color_elements):
    if len(color_elements) == 1:
        color_candidates = [color_elements[0]]
    else:
        color_candidates = [color_elements[0] + color_elements[1], color_elements[1] + color_elements[0]]

    for color in color_candidates:
        if color in secondary_colors or color in main_colors:
            return color


while tokens:
    color_elements = []

    if len(tokens) > 1:
        left_string = tokens.pop(0)
        right_string = tokens.pop()
        color_elements = [left_string, right_string]
    else:
        color_elements = [tokens.pop()]

    color = is_color(color_elements)

    if color:
        found_colors.append(color)
    else:
        middle_idx = len(tokens) // 2
        elements_to_insert = [color_element[:-1] for color_element in color_elements if len(color_element) > 1]
        tokens = tokens[:middle_idx] + elements_to_insert + tokens[middle_idx:]


result = []
for color in found_colors:
    if color in secondary_colors:
        main_colors_of_color = secondary_colors[color]
        #if main_colors_of_color[0] in found_colors and main_colors_of_color[1] in found_colors:
        if all([color in found_colors for color in main_colors]):
            result.append(color)
    else:
        result.append(color)

print(result)
