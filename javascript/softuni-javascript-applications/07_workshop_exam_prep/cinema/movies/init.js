(function addEventListeners() {
    let navigationTemplate = Handlebars.compile(
        document.getElementById('navigation-template').innerHTML
    );
    let homeMoviesTemplate = Handlebars.compile(
        document.getElementById('home-movies-template').innerHTML
    );
    let movieCardTemplate = Handlebars.compile(
        document.getElementById('movie-card').innerHTML
    );
    Handlebars.registerPartial('nav-template', navigationTemplate);
    Handlebars.registerPartial('home-movies', homeMoviesTemplate);
    Handlebars.registerPartial('movie-card', movieCardTemplate);

    navigate(location.pathname === '/' ? 'home' : location.pathname.slice(1));
})();

function navHandler(e) {
    e.preventDefault();
    const { target } = e;

    if (target.tagName !== 'A' || !target.href) {
        return;
    }

    const url = new URL(target.href);
    navigate(url.pathname.slice(1));
}

function onLoginSubmit(e) {
    e.preventDefault();
    let formData = new FormData(document.forms['login-form']);
    const email = formData.get('email');
    const password = formData.get('password');
    authService.login(email, password).then((data) => {
        navigate('home');
    });
}

function onAddMovieSubmit(e) {
    e.preventDefault();
    let formData = new FormData(document.forms['add-movie-form']);
    const title = formData.get('title');
    const description = formData.get('description');
    const imageUrl = formData.get('imageUrl');

    movieService
        .add({ title, description, imageUrl })
        .then((res) => navigate('home'));
}
