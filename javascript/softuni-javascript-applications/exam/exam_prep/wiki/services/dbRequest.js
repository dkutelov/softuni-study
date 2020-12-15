const request = async (method, url, body) => {
    const options = {
        method,
    };

    if (body) {
        Object.assign(options, {
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ ...body, returnSecureToken: true }),
        });
    }

    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};

export default {
    get: request.bind(this, 'GET'),
    post: request.bind(this, 'POST'),
    put: request.bind(this, 'PUT'),
    path: request.bind(this, 'PATCH'),
    delete: request.bind(this, 'DELETE'),
};
