(() => {
    const htmlSelectors = {
        monkeysContainer: () => document.querySelector('.monkeys'),
    };

    getTemplates(
        './templates/partials/monkey.hbs',
        './templates/monkeys.hbs'
    ).then(([monkeyView, monkeysView]) => {
        Handlebars.registerPartial('monkeyTemplate', monkeyView);
        const template = Handlebars.compile(monkeysView);
        htmlSelectors.monkeysContainer().innerHTML = template({ monkeys });

        showMonkeyInfo();
    });

    function getTemplates(monkeyUrl, monkeysUrl) {
        const monkeyView = fetch(monkeyUrl).then((response) => response.text());
        const monkeysView = fetch(monkeysUrl).then((response) =>
            response.text()
        );

        return Promise.all([monkeyView, monkeysView])
            .then(([monkeyView, monkeysView]) => [monkeyView, monkeysView])
            .catch((err) => console.log(err));
    }

    function showMonkeyInfo() {
        htmlSelectors.monkeysContainer().addEventListener('click', (e) => {
            const { target } = e;

            if (target.nodeName !== 'BUTTON' || target.textContent !== 'Info')
                return;

            target.nextElementSibling.style.display = 'block';
        });
    }
})();
