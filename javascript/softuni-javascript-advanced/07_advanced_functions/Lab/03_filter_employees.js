function solve(data, criteria) {
    data = JSON.parse(data);
    const [key, value] = criteria.split('-');

    const result = data.filter( obj => obj[key] === value).map( (obj, index) => {
        const {first_name, last_name, email } = obj;
        return `${index}. ${first_name} ${last_name} - ${email}`;
    });
    return console.log(result.join('\n'));
}


solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'
);