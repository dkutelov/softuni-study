function Company() {
    const departments = [];

    function validateInput(username, salary, position, department){
        function validateField(inputField) {
            return inputField !== '' && inputField !== null && inputField !== undefined
        }

        const isDataValid = [username, salary, position, department].every(validateField);

        if (!isDataValid) {
            throw new Error('Invalid input!')
        }

        if (Number.isNaN(salary) || salary < 0) {
            throw new Error('Invalid input!')
        }
    }

    function addEmployee(username, salary, position, department) {
        salary = Number(salary);
        validateInput(username, salary, position, department);
        let currentDepartment = departments.find(el => el.name === department);

        if (!currentDepartment) {
            currentDepartment = { name: department, employees: []}
            departments.push(currentDepartment);
        }
        currentDepartment.employees.push({username, salary, position});

        return `New employee is hired. Name: ${username}. Position: ${position}`
    }

    function averageDepartmentSalary(department) {
        return department.employees.reduce((acc, el) => acc + el.salary, 0) /  department.employees.length;
    }

    function bestDepartment() {
        // const bestDepartment = [...departments].sort((a,b) =>
        //     averageDepartmentSalary(b)  - averageDepartmentSalary(a))[0];
        const departmentsAvgSalary = [...departments].map( department => {
            return {...department, avgSalary: averageDepartmentSalary(department)
            }});
        const bestDepartment = departmentsAvgSalary.sort( (a,b) => (b.avgSalary - a.avgSalary))[0];

        let printMessage = `Best Department is: ${bestDepartment.name}\n`;
        printMessage += `Average salary: ${averageDepartmentSalary(bestDepartment).toFixed(2)}\n`;

        printMessage += [...bestDepartment.employees]
            .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username))
            .reduce( (acc, employee) => acc += `${employee.username} ${employee.salary} ${employee.position}\n`, '');
        return printMessage.slice(0,-1);
    }
    return {
        departments,
        addEmployee,
        bestDepartment
    }
}

let c =  Company();
const addNewEmployee = c.addEmployee;
addNewEmployee("Stanimir", 2000, "engineer", "Human resources");
addNewEmployee("Pesho", 1500, "electrical engineer", "Construction");
addNewEmployee("Slavi", 500, "dyer", "Construction");
addNewEmployee("Stan", 2000, "architect", "Construction");
addNewEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
addNewEmployee("Pesho", 1000, "graphical designer", "Marketing");
addNewEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
