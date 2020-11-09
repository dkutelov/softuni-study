class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = this.validateId(clientId);
        this.email = this.validateEmail(email);
        this.firstName = this.validateName(firstName, true);
        this.lastName = this.validateName(lastName, false);
    }

    validateId(value) {
        if (!value.match(/\d+/g) || value.length !== 6) {
            throw new TypeError('Client ID must be a 6-digit number');
        }
        return value;
    }

    validateEmail(value) {
        if (!value.match(/^[\w]+@[a-z\.]+/g)) {
            throw new TypeError('Invalid e-mail');
        }
        return value;
    }

    validateName(value, isFirst){
        if (value.length < 3 || value.length > 20) {
            throw new TypeError(`${isFirst ? 'First': 'Last'} name must be between 3 and 20 characters long`);
        }
        if (!value.match(/^[A-Za-z]+$/g)) {
            throw new TypeError(`${isFirst ? 'First': 'Last'} name must contain only Latin characters`);
        }
        return value
    }
}

// let acc = new CheckingAccount('4234145', 'petkan@another.co.uk', 'Petkan', 'Draganov');
// console.log(acc);


class CheckingAccount1 {
    #clientId;
    #email;
    #firstName;
    #lastName;

    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get clientId() {
        return this.#clientId;
    }
    set clientId(id) {
        if (typeof id === 'string' && id.length === 6 && parseInt(id)) {
            this.#clientId = id;
        } else {
            throw new TypeError('Client ID must be a 6-digit number');
        }
    }
    get email() {
        return this.#email;
    }
    set email(email) {
        const myRegex = /^\w+@[a-zA-Z]+(\.[a-zA-Z]+)+/;
        const isValidEmail = myRegex.test(email);
        if (isValidEmail) {
            this.#email = email;
        } else {
            throw new TypeError('Invalid e-mail');
        }
    }

    get firstName() {
        return this.#firstName;
    }

    set firstName(firstName) {
        const myRegex = /^[a-zA-Z]+$/;
        const isValidName = myRegex.test(firstName);
        const hasValidLength = firstName.length >= 3 && firstName.length <= 20;
        if (isValidName && hasValidLength) {
            this.#firstName = firstName;
        } else {
            if (!hasValidLength) {
                throw new TypeError(
                    'First name must be between 3 and 20 characters long'
                );
            }
            if (!isValidName) {
                throw new TypeError('First name must contain only Latin characters');
            }
        }
    }

    get lastName() {
        return this.#lastName;
    }

    set lastName(lastName) {
        const myRegex = /^[a-zA-Z]+$/;
        const isValidName = myRegex.test(lastName);
        const hasValidLength = lastName.length >= 3 && lastName.length <= 20;
        if (isValidName && hasValidLength) {
            this.#lastName = lastName;
        } else {
            if (!hasValidLength) {
                throw new TypeError(
                    'Last name must be between 3 and 20 characters long'
                );
            }
            if (!isValidName) {
                throw new TypeError('Last name must contain only Latin characters');
            }
        }
    }
}

let account = new CheckingAccount1(
    '123456',
    'email@gmail.com',
    'Ivan',
    'Ivanov'
);

console.log(account);
