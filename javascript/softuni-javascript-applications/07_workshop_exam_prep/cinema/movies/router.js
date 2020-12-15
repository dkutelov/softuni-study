const routes = {
    login: 'login-form-template',
    register: 'register-form-template',
    home: 'homepage-template',
    'add-movie': 'add-movies-template',
    details: 'movie-detail-template',
};

const router = async (basePath) => {
    const [path, id] = basePath.split('/');
    let root = document.getElementById('root');
    const tempateData = authService.getAuthData();

    switch (path) {
        case 'home':
            tempateData.movies = await movieService.getAll();
            break;
        case 'details':
            const movie = await movieService.getMovie(id);
            movie.likes = 10;
            Object.assign(tempateData, movie);
            break;
        case 'logout':
            authService.logout();
            return navigate('home');
    }

    console.log(path);
    let template = Handlebars.compile(
        document.getElementById(routes[path]).innerHTML
    );

    root.innerHTML = template(tempateData);
};

const navigate = (path) => {
    history.pushState({}, '', path);
    router(path);
};
