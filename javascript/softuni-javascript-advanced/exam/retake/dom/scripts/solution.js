function solve() {
    const htmlSelectors = {
        jsFundamentalEl: () =>
            document.querySelector('input[name="js-fundamentals"]'),
        jsAdvancedEl: () => document.querySelector('input[name="js-advanced"]'),
        jsApplicationsEl: () =>
            document.querySelector('input[name="js-applications"]'),
        jsWebEl: () => document.querySelector('input[name="js-web"]'),
        courseType: () =>
            Array.from(
                document.querySelectorAll(
                    '#educationForm input[name="educationForm"]'
                )
            ),
        signUpButton: () =>
            document.querySelector('.courseFoot button[value="signMeUp"]'),
        coursesNamesUl: () =>
            document.querySelector('#myCourses .courseBody ul'),
        coursesPriceUl: () =>
            document.querySelector('#myCourses .courseFoot p'),
    };

    htmlSelectors.signUpButton().addEventListener('click', onSignUp);

    const prices = {
        'js-fundamentals': 170,
        'js-advanced': 180,
        'js-applications': 190,
        'js-web': 490,
    };

    function onSignUp(e) {
        e.preventDefault();

        const signUpCources = [
            htmlSelectors.jsFundamentalEl(),
            htmlSelectors.jsAdvancedEl(),
            htmlSelectors.jsApplicationsEl(),
            htmlSelectors.jsWebEl(),
        ];

        let cost = 0;
        let names = [];

        for (const course of signUpCources) {
            if (course.checked) {
                const courseName = course.value;
                names.push(courseName);
                cost += prices[courseName];
            }
        }

        if (
            names.includes('js-fundamentals') &&
            names.includes('js-advanced')
        ) {
            cost -= prices['js-advanced'] * 0.1;
        }

        if (
            names.includes('js-fundamentals') &&
            names.includes('js-advanced') &&
            names.includes('js-applications')
        ) {
            cost -=
                (prices['js-fundamentals'] +
                    prices['js-advanced'] * 0.9 +
                    prices['js-applications']) *
                0.06;
        }

        for (let course of names) {
            const liEl = document.createElement('li');
            liEl.textContent =
                'JS-' + course[3].toUpperCase() + course.slice(4);
            htmlSelectors.coursesNamesUl().appendChild(liEl);
        }

        if (names.length === 4) {
            const liEl = document.createElement('li');
            liEl.textContent = 'HTML and CSS';
            htmlSelectors.coursesNamesUl().appendChild(liEl);
        }

        const isOnline = htmlSelectors.courseType()[1].checked;

        if (isOnline) {
            cost -= cost * 0.06;
        }
        htmlSelectors.coursesPriceUl().textContent =
            'Cost: ' + parseInt(cost) + '.00 BGN';

        htmlSelectors.jsFundamentalEl().checked = false;
        htmlSelectors.jsAdvancedEl().checked = false;
        htmlSelectors.jsApplicationsEl().checked = false;
        htmlSelectors.jsWebEl().checked = false;
        htmlSelectors.courseType()[0].checked = true;
        htmlSelectors.courseType()[1].checked = false;
    }
}

solve();
