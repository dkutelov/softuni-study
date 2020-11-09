function convertJSONToObject(personString) {
    let person = JSON.parse(personString);

    for (const key in person) {
        if (person.hasOwnProperty(key)) {
            console.log(`${key}: ${person[key]}`);
        }
    }
}

convertJSONToObject('{"name": "George", "age": 40, "town": "Sofia"}');
