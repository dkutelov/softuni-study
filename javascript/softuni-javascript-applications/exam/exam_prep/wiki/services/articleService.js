import request from './dbRequest.js';
import autService from './authService.js';

const baseURL = 'https://softuni-27659.firebaseio.com';

const urlBuilder = (resource) =>
    `${baseURL}/${resource}.json?auth=${autService.getAuthData().idToken}`;

export default {
    add: async (newArticle) => {
        try {
            const article = await request.post(
                urlBuilder('articles'),
                newArticle
            );
            return article;
        } catch (err) {
            return err;
        }
    },
    getAll: async () => {
        try {
            const articles = await request.get(urlBuilder('articles'));
            return Object.keys(articles).map((key) => ({
                id: key,
                ...articles[key],
            }));
        } catch (err) {
            return err;
        }
    },
    getOneById: async ({ id }) => {
        try {
            const item = await request.get(urlBuilder(`articles/${id}`));
            return { ...item, itemId: id };
        } catch (err) {
            return err;
        }
    },
    update: async (userId, postId, postObj) => {
        try {
            const updatedPost = await makeRequest(
                `${baseURL}/articles/${userId}/${postId}.json`,
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
                `${baseURL}/articles/${userId}/${postId}.json`,
                'DELETE'
            );
            return { successMessage: 'Post successfully deleted' };
        } catch (err) {
            return err;
        }
    },
};
