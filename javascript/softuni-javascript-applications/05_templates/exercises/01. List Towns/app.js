const htmlSelectors = {
    townsInputElement: () => document.getElementById('towns'),
    loadButton: () => document.getElementById('btnLoadTowns'),
    townsContainer: () => document.getElementById('root'),
};

htmlSelectors.loadButton().addEventListener('click', onLoad);

function onLoad(e) {
    e.preventDefault();

    const { value } = htmlSelectors.townsInputElement();

    let towns = [];

    if (value) towns = value.split(/[, ]+/g);
    showTowns(towns);
}

async function showTowns(towns) {
    let townsView;

    try {
        townsView = await getTemplate();
    } catch (err) {
        console.log(err);
    }

    const townsTemplate = Handlebars.compile(townsView);
    htmlSelectors.townsContainer().innerHTML = townsTemplate({ towns });
}

async function getTemplate() {
    const data = await fetch('./template.hbs');
    return await data.text();
}
