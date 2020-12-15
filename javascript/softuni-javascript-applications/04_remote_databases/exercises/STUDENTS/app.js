const htmlSelectors = {
    createButton: () => document.getElementById('create-button'),
    createFormInputs: () => document.querySelectorAll('.create-form input'),
    errorWrapper: () => document.getElementById('error-wrapper'),
    studentsContainer: () => document.querySelector('#results tbody'),
};
const baseURL = 'https://books-exercise-3578d.firebaseio.com/students/.json';
let currentId = 0;

window.addEventListener('load', fetchStudents);
htmlSelectors.createButton().addEventListener('click', onCreate);

async function onCreate(e) {
    e.preventDefault();
    const [
        firstNameElement,
        lastNameElement,
        facultyNumberElement,
        gradeElement,
    ] = Array.from(htmlSelectors.createFormInputs());

    const [firstName, lastName, facultyNumber, grade] = [
        firstNameElement,
        lastNameElement,
        facultyNumberElement,
        gradeElement,
    ].map((el) => el.value);

    const error = validateInput(firstName, lastName, facultyNumber, grade);
    if (error) {
        handleError(error);
        return;
    }

    const newStudent = {
        ID: currentId,
        FirstName: firstName,
        LastName: lastName,
        FacultyNumber: facultyNumber,
        Grade: grade,
    };

    try {
        await fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(newStudent),
        });
        firstNameElement.value = '';
        lastNameElement.value = '';
        facultyNumberElement.value = '';
        gradeElement.value = '';
        await fetchStudents();
    } catch (err) {
        handleError(err);
    }
}

function validateInput(firstName, lastName, facultyNumber, grade) {
    let error = null;
    if (firstName === '' || !firstName instanceof String) {
        error = { message: 'First name can not e an empty string!' };
    }
    if (lastName === '' || !firstName instanceof String) {
        error = { message: 'Last name can not e an empty string!' };
    }
    if (
        facultyNumber === '' ||
        !!(facultyNumber instanceof String || facultyNumber instanceof Number)
    ) {
        error = { message: 'Faculty number should be text or number!' };
    }

    if (grade === '' || !grade instanceof Number) {
        error = { message: 'Grade should be a number!' };
    }
    return error;
}

async function fetchStudents() {
    try {
        const data = await fetch(baseURL);
        const students = await data.json();
        let sortedStudents = [];

        if (!students) {
            currentId = 1;
            return;
        }

        if (students.length === 1) {
            currentId = 1;
            sortedStudents = Object.values(students)[0];
        } else {
            sortedStudents = sortStudents(students);
            currentId = sortedStudents[sortedStudents.length - 1].ID;
        }

        currentId++;
        renderStudents(sortedStudents);
    } catch (err) {
        handleError(err);
    }
}

function sortStudents(students) {
    return Object.keys(students)
        .sort((a, b) => students[a].ID - students[b].ID)
        .map((studentId) => students[studentId]);
}

function renderStudents(students) {
    htmlSelectors.studentsContainer().innerHTML = students
        .map(({ ID, FirstName, LastName, FacultyNumber, Grade }) => {
            return `<tr>
                    <td>${ID}</td>
                    <td>${FirstName}</td>
                    <td>${LastName}</td>
                    <td>${FacultyNumber}</td>
                    <td>${Grade}</td>
                </tr>`;
        })
        .join('');
}

function handleError(err) {
    const errorWrapper = htmlSelectors.errorWrapper();
    errorWrapper.style.display = 'block';
    errorWrapper.textContent = err.message;

    setTimeout(() => {
        errorWrapper.textContent = '';
        errorWrapper.style.display = 'none';
    }, 5000);
}
