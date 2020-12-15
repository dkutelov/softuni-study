const apiKey = 'AIzaSyBFATJ98BeptBpYiM6tboQT7hpj8tCd6xQ';
const dbUrl = 'https://my-movies-602a6.firebaseio.com';

const request = async (url, method, body) => {
    const options = {
        method,
    };

    if (body) {
        Object.assign(options, {
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(body),
        });
    }

    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};

const authService = {
    async login(email, password) {
        let response = await fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            }
        );
        let data = await response.json();
        localStorage.setItem('auth', JSON.stringify(data));
        return data;
    },
    logout() {
        localStorage.setItem('auth', '');
    },

    getAuthData() {
        try {
            let data = JSON.parse(localStorage.getItem('auth'));
            return {
                isAuthenticated: Boolean(data.idToken),
                email: data.email,
            };
        } catch (err) {
            return {
                isAuthenticated: false,
                email: '',
            };
        }
    },
};

const movieService = {
    async add(movieData) {
        const movie = await request(`${dbUrl}/movies.json`, 'POST', movieData);
        return movie;
    },
    async getAll() {
        const response = await request(`${dbUrl}/movies.json`, 'GET');

        return Object.keys(response).map((id) => ({ id, ...response[id] }));
    },
    async getMovie(id) {
        const response = await request(`${dbUrl}/movies/${id}.json`, 'GET');
        return response;
    },
};
