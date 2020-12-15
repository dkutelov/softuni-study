(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
        const catView = document.getElementById('cat-template').innerHTML;
        Handlebars.registerPartial('catTemplate', catView);
        let catsList;

        try {
            catsList = await getTemplate('./cats-template.hbs');
        } catch (err) {
            console.log(err);
        }

        const template = Handlebars.compile(catsList);
        document.getElementById('allCats').innerHTML = template({ cats });
        setButtonToggle();
    }

    function setButtonToggle() {
        const toggleButtons = document.querySelectorAll('.showBtn');
        Array.from(toggleButtons).forEach((toggleBtn) =>
            toggleBtn.addEventListener('click', onToggle)
        );
    }

    function onToggle(e) {
        const toggleButton = e.target;
        const currentText = toggleButton.textContent.trim();
        toggleButton.textContent =
            currentText === 'Show status code'
                ? 'Hide status code'
                : 'Show status code';

        const codeDivElement = toggleButton.nextElementSibling;
        const currentDisplay = codeDivElement.style.display;
        codeDivElement.style.display =
            currentDisplay === 'none' ? 'block' : 'none';
    }

    async function getTemplate(templateUrl) {
        const data = await fetch(templateUrl);
        return await data.text();
    }
})();
