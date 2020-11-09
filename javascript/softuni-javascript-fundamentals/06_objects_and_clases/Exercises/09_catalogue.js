function createCatalogue(input) {
    const catalogue = [];

    input.forEach((tokens) => {
        const [name, price] = tokens.split(' : ');
        const letter = name[0];

        const currentLetter = catalogue.find((el) => el.letter == letter);
        if (currentLetter === undefined) {
            catalogue.push({
                letter,
                words: [{ [name]: parseFloat(price) }],
            });
        } else {
            currentLetter.words.push({ [name]: parseFloat(price) });
        }
    });

    catalogue.sort((a, b) => a.letter.localeCompare(b.letter));

    catalogue.forEach((el) => {
        console.log(el.letter);
        el.words.sort((a, b) =>
            Object.keys(a)[0].localeCompare(Object.keys(b)[0])
        );
        el.words.forEach((word) =>
            console.log(`  ${Object.keys(word)[0]}: ${Object.values(word)[0]}`)
        );
    });
}

function createCatalogue1(input) {
    const catalogue = {};

    input.forEach((tokens) => {
        const [name, price] = tokens.split(' : ');
        const letter = name[0];

        if (catalogue[letter] === undefined) {
            catalogue[letter] = {};
        }
        catalogue[letter][name] = parseFloat(price);
    });

    sorted_letters = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

    sorted_letters.forEach((letter) => {
        console.log(letter);

        sorted_words = Object.keys(catalogue[letter]).sort((a, b) =>
            a.localeCompare(b)
        );
        sorted_words.forEach((word) =>
            console.log(`  ${word}: ${catalogue[letter][word]}`)
        );
    });
}

createCatalogue1([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
]);
