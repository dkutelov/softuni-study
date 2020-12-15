import { request } from './requestService.js';
import { getMovies } from './authServices.js';

const dbUrl = 'https://my-movies-602a6.firebaseio.com/';

export const addMovie = async (movieData) => {
    const idToken = await firebase.auth().currentUser.getIdToken(true);

    const movie = await request(
        `${dbUrl}/movies.json?auth=${idToken}`,
        'POST',
        movieData
    );
    return movie;
};

export const getAllMovies = async (searchText) => {
    const response = await request(`${dbUrl}/movies.json`, 'GET');
    getMovies();
    return Object.keys(response)
        .map((id) => ({ id, ...response[id] }))
        .filter((x) => !searchText || searchText === x.title);
};

export const getMovieById = async (id) => {
    const response = await request(`${dbUrl}/movies/${id}.json`, 'GET');
    return response;
};
