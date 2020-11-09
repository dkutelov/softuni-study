function createPhonebook(arguments) {
    phonebook = {};

    arguments.forEach((personDetails) => {
        const [personName, phoneNumber] = personDetails.split(' ');

        phonebook[personName] = phoneNumber;
    });

    for (const name in phonebook) {
        console.log(`${name} -> ${phonebook[name]}`);
    }
}

createPhonebook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344',
]);
