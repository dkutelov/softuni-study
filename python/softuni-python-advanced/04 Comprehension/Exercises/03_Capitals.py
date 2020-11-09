# zip solution
def read_countries_and_capitals():
    countries = input().split(', ')
    capitals = input().split(', ')
    return zip(countries, capitals)


countries_and_capitals = read_countries_and_capitals()
[print(f'{country} -> {capital}') for country, capital in countries_and_capitals]


# Dictionary solution
def read_countries_and_capitals():
    countries = input().split(', ')
    capitals = input().split(', ')
    return {countries[i]: capitals[i] for i in range(len(countries))}


countries_and_capitals = read_countries_and_capitals()
[print(f'{country} -> {capital}') for country, capital in countries_and_capitals.items()]
