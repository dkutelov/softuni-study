const dbUrl = 'https://softuni-27659.firebaseio.com/';

const makeRequest = async (url, method, body) => {
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
    register: async (email, password) => {
        try {
            const user = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
            return user;
        } catch (err) {
            return err;
        }
    },
    login: async (email, password) => {
        try {
            const user = await firebase
                .auth()
                .signInWithEmailAndPassword(email, password);
            return user;
        } catch (err) {
            return err;
        }
    },
    logout: async () => {
        try {
            await firebase.auth().signOut();
            return { status: 'Logged out' };
        } catch (err) {
            return err;
        }
    },
    getAuthData: () => {
        try {
            let { email, id } = JSON.parse(localStorage.getItem('auth'));
            return {
                isAuthenticated: Boolean(id),
                email,
                id,
            };
        } catch (err) {
            return {
                isAuthenticated: false,
                email: null,
                id: null,
            };
        }
    },
};

const offerService = {
    add: async (newShoe) => {
        try {
            const newProduct = await makeRequest(
                `${dbUrl}/shoes/.json`,
                'POST',
                newShoe
            );
            return newProduct;
        } catch (err) {
            return err;
        }
    },
    update: async (offerId, updatedOffer) => {
        try {
            const updatedProduct = await makeRequest(
                `${dbUrl}/shoes/${offerId}.json`,
                'PATCH',
                updatedOffer
            );
            return updatedProduct;
        } catch (err) {
            return err;
        }
    },
    delete: async (offerId) => {
        try {
            await makeRequest(`${dbUrl}/shoes/${offerId}.json`, 'DELETE');
            return { successMessage: 'Product successfully deleted' };
        } catch (err) {
            return err;
        }
    },
    getAll: async () => {
        try {
            const products = await makeRequest(`${dbUrl}/shoes/.json`, 'GET');
            return products;
        } catch (err) {
            return err;
        }
    },
    getOfferById: async (id) => {
        try {
            const offer = await makeRequest(`${dbUrl}/shoes/${id}.json`, 'GET');
            return offer;
        } catch (err) {
            return err;
        }
    },
};
