class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = []
    }

    newCustomer(customer) {
        const currentCustomer = this.allCustomers.find(x => x.firstName === customer.firstName &&
            x.lastName === customer.lastName);

        if (currentCustomer) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }

        this.allCustomers.push(customer);
        return customer;
    }

    getCustomer(personalId) {
        const currentCustomer = this.allCustomers.find(x => x.personalId === personalId);

        if (!currentCustomer) {
            throw new Error('We have no customer with this ID!')
        }

        return currentCustomer;
    }

    depositMoney (personalId, amount) {
        const currentCustomer = this.getCustomer(personalId);

        if (!currentCustomer.hasOwnProperty('totalMoney')) {
            currentCustomer.totalMoney = 0;
        }
        currentCustomer.totalMoney += amount;

        if (!currentCustomer.transactions) {
            currentCustomer.transactions = []
        }

        currentCustomer.transactions.push({type:'deposit', amount});
        return `${currentCustomer.totalMoney}$`
    }

    withdrawMoney (personalId, amount) {
        const currentCustomer = this.getCustomer(personalId);

        if (currentCustomer.totalMoney < amount) {
            throw new Error(`${currentCustomer.firstName} ${currentCustomer.lastName} does not have enough money to withdraw that amount!`)
        }

        currentCustomer.totalMoney -= amount;
        currentCustomer.transactions.push({type:'withdraw', amount});
        return `${currentCustomer.totalMoney}$`;
    }

    customerInfo (personalId) {
        const customer = this.getCustomer(personalId);

        let result = `Bank name: ${this._bankName}\nCustomer name: ${customer.firstName} ${customer.lastName}\n`;
        result += `Customer ID: ${personalId}\nTotal Money: ${customer.totalMoney}$\n`;
        const transactionsCount = customer.transactions.length;
        if (transactionsCount > 0) {
            result += `Transactions:\n`;
            result += customer.transactions
                .reverse()
                .map( ({type, amount}, i) => {
                    let text = `${transactionsCount-i}. ${customer.firstName} ${customer.lastName} `;
                    text += `${type === 'deposit' ? 'made deposit of' : 'withdrew'} `;
                    text += `${amount}$!`;
                    return text;
                })
                .join('\n')
        }
        return result;
    }
}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));
//console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.customerInfo(6233267));