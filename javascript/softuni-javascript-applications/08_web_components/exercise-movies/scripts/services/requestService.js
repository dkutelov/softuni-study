const dbUrl = 'https://my-movies-602a6.firebaseio.com';
import { notify } from '../utils.js';

export const request = async (url, method, body) => {
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
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        notify(error.message, 'error');
    }
};
