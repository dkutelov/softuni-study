(function () {
    registerHandlebarsPartials();
    navigate(location.pathname === '/' ? 'home' : location.pathname.slice(1));
})();

function registerHandlebarsPartials() {
    let navigationTemplate = Handlebars.compile(
        document.getElementById('navigation-template').innerHTML
    );
    let postCardTemplate = Handlebars.compile(
        document.getElementById('post-card-template').innerHTML
    );
    Handlebars.registerPartial('nav-template', navigationTemplate);
    Handlebars.registerPartial('post-card-template', postCardTemplate);
}

function navigationHandler(e) {
    e.preventDefault();
    let { target } = e;
    let currentElement = target;

    if (currentElement.tagName === 'IMG') {
        currentElement = currentElement.parentElement;
    }

    if (currentElement.tagName !== 'A' || !currentElement.href) {
        return;
    }

    const url = new URL(currentElement.href);
    navigate(url.pathname.slice(1));
}
