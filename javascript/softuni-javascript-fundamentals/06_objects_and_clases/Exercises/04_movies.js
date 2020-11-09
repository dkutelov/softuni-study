function movies(input) {
    let movies = [];

    function getNameAndDetail(tokens, separator) {
        tokens = tokens.split(' ');
        const i = tokens.indexOf(separator);
        const name = tokens.slice(0, i).join(' ');
        const detail = tokens.slice(i + 1).join(' ');
        return { name, detail };
    }

    function addMovieDetail(name, key, detail) {
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].name === name) {
                movies[i][key] = detail;
            }
        }
    }

    input.forEach((tokens) => {
        if (tokens.includes('addMovie')) {
            const name = tokens.replace('addMovie ', '');
            movies.push({ name });
        } else if (tokens.includes('directedBy')) {
            const { name, detail } = getNameAndDetail(tokens, 'directedBy');
            addMovieDetail(name, 'director', detail);
        } else if (tokens.includes('onDate')) {
            const { name, detail } = getNameAndDetail(tokens, 'onDate');
            addMovieDetail(name, 'date', detail);
        }
    });

    for (let movie of movies) {
        if (movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}

function movies1(input) {
    let movies = [];

    input.forEach((line) => {
        const tokens = line.split(' ');
        const addIndex = tokens.indexOf('addMovie');
        const directorIndex = tokens.indexOf('directedBy');
        const dateIndex = tokens.indexOf('onDate');

        if (addIndex > -1) {
            movies.push({
                name: tokens.splice(addIndex + 1).join(' '),
            });
        } else if (directorIndex > -1) {
            const name = tokens.slice(0, directorIndex).join(' ');
            const director = tokens.slice(directorIndex + 1).join(' ');
            const movie = movies.find((movie) => movie.name === name);
            if (movie !== undefined) {
                movie.director = director;
            }
            movies.forEach((movie) => {
                if (movie.name === name) {
                    movie.director = director;
                }
            });
        } else if (dateIndex > -1) {
            const name = tokens.slice(0, dateIndex).join(' ');
            const date = tokens.slice(dateIndex + 1).join(' ');
            movies.forEach((movie) => {
                if (movie.name === name) {
                    movie.date = date;
                }
            });
        }
    });

    for (let movie of movies) {
        if (movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}

movies1([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen',
]);
