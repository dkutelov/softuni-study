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
            let { email, id, isAuthenticated } = JSON.parse(
                localStorage.getItem('auth')
            );
            return {
                isAuthenticated,
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

const postService = {
    add: async (userId, newPost) => {
        try {
            const createdPost = await makeRequest(
                `${dbUrl}/posts/${userId}.json`,
                'POST',
                newPost
            );
            return createdPost;
        } catch (err) {
            return err;
        }
    },
    getAll: async (userId) => {
        try {
            const posts = await makeRequest(
                `${dbUrl}/posts/${userId}.json`,
                'GET'
            );
            console.log(userId, posts);
            return posts;
        } catch (err) {
            return err;
        }
    },
    getPostById: async (userId, id) => {
        try {
            const post = await makeRequest(
                `${dbUrl}/posts/${userId}/${id}.json`,
                'GET'
            );
            return { ...post, postId: id };
        } catch (err) {
            return err;
        }
    },
    update: async (userId, postId, postObj) => {
        try {
            const updatedPost = await makeRequest(
                `${dbUrl}/posts/${userId}/${postId}.json`,
                'PUT',
                postObj
            );
            return updatedPost;
        } catch (err) {
            return err;
        }
    },
    delete: async (userId, postId) => {
        try {
            await makeRequest(
                `${dbUrl}/posts/${userId}/${postId}.json`,
                'DELETE'
            );
            return { successMessage: 'Post successfully deleted' };
        } catch (err) {
            return err;
        }
    },
};
