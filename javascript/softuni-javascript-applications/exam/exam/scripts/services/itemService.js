import request from './request.js';
import autService from './authService.js';

const baseURL = 'https://softuni-27659.firebaseio.com';

const urlBuilder = (resource) =>
    `${baseURL}/${resource}.json?auth=${autService.getAuthData().idToken}`;

export default {
    add: async (newItem) => {
        try {
            const item = await request.post(
                urlBuilder('destinations'),
                newItem
            );
            return item;
        } catch (err) {
            return err;
        }
    },
    getAll: async () => {
        try {
            const items = await request.get(urlBuilder('destinations'));
            return Object.keys(items).map((key) => ({
                id: key,
                ...items[key],
            }));
        } catch (err) {
            return err;
        }
    },
    getOneById: async ({ id }) => {
        try {
            const item = await request.get(urlBuilder(`destinations/${id}`));
            return { ...item, itemId: id };
        } catch (err) {
            return err;
        }
    },
    update: async (itemId, itemObj) => {
        try {
            const updatedItem = await request.patch(
                urlBuilder(`destinations/${itemId}`),
                itemObj
            );
            return updatedItem;
        } catch (err) {
            return err;
        }
    },
    delete: async (id) => {
        try {
            await request.delete(urlBuilder(`destinations/${id}`));
        } catch (err) {
            return err;
        }
    },
    getMyDestinations: async (userId) => {
        try {
            const items = await request.get(urlBuilder('destinations'));
            return Object.keys(items)
                .map((key) => ({
                    id: key,
                    ...items[key],
                }))
                .filter((destination) => destination.creator === userId);
        } catch (err) {
            return err;
        }
    },
};
