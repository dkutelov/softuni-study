class Company {
    static
    validateInput(inputField){
        return inputField !== '' && inputField !== null && inputField !== undefined
    }

    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        const isDataValid = [username, salary, position, department].every(Company.validateInput);

        if (!isDataValid) {
            throw new Error('Invalid input!')
        }

        salary = Number(salary);

        if (Number.isNaN(salary) || salary < 0) {
            throw new Error('Invalid input!')
        }

        const currentDepartment = this.departments.find(el => el.name === department);
        const employee = {username, salary, position};

        if (!currentDepartment) {
            this.departments.push({ name: department, employees: [employee]})
        } else {
            currentDepartment.employees.push(employee)
        }

        return `New employee is hired. Name: ${username}. Position: ${position}`
    }

    averageDepartmentSalary(department) {
        return department.employees.reduce((acc, el) => acc + el.salary, 0) /  department.employees.length;
    }

    bestDepartment() {
        const bestDepartment = [...this.departments].sort((a,b) =>
            this.averageDepartmentSalary(b)  - this.averageDepartmentSalary(a))[0];
        let printMessage = `Best Department is: ${bestDepartment.name}\n`;
        printMessage += `Average salary: ${this.averageDepartmentSalary(bestDepartment).toFixed(2)}\n`;
        printMessage += [...bestDepartment.employees]
            .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username))
            .reduce( (acc, employee) => acc += `${employee.username} ${employee.salary} ${employee.position}\n`, '');
        return printMessage.slice(0,-1);
    }
}



let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
