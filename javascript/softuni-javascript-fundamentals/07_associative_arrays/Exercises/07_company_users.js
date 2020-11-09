function companyUsers(params) {
    const companies = {};

    params.forEach((param) => {
        const [company, employeeId] = param.split(' -> ');

        if (!companies[company]) {
            companies[company] = new Set();
        }

        companies[company].add(employeeId);
    });

    sorted_companies = Object.entries(companies).sort((a, b) =>
        a[0].localeCompare(b[0])
    );

    for (let company of sorted_companies) {
        console.log(`${company[0]}`);
        for (let employeeId of company[1]) {
            console.log(`-- ${employeeId}`);
        }
    }
}

// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> BB12345',
//     'Microsoft -> CC12345',
//     'HP -> BB12345',
//     'SoftUni -> AA12345',
// ]);

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111',
]);
