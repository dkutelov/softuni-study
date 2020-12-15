import authService from '../services/authService.js';
import itemService from '../services/itemService.js';
import { router } from '../router.js';
import { handleError, handleNotification } from '../utils.js';

export default {
    homepageItems() {
        const { isAuthenticated } = authService.getAuthData();

        if (!isAuthenticated) return null;

        return itemService.getAll();
    },
    dashboardItems() {
        const { isAuthenticated, id } = authService.getAuthData();

        if (!isAuthenticated) return null;

        return itemService.getMyDestinations(id);
    },
    itemDetail(id) {
        const { isAuthenticated } = authService.getAuthData();

        if (!isAuthenticated) return null;

        return itemService.getOneById(id);
    },
    itemEdit(id) {
        const { isAuthenticated } = authService.getAuthData();

        if (!isAuthenticated) return null;

        return itemService.getOneById(id);
    },
    onCreateSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.target);
        let destination = formData.get('destination');
        let city = formData.get('city');
        let duration = formData.get('duration');
        let departureDate = formData.get('departureDate');
        let imgUrl = formData.get('imgUrl');

        if (
            destination === '' ||
            city === '' ||
            duration === '' ||
            departureDate === '' ||
            imgUrl === ''
        ) {
            handleError({ message: 'All fields should be filled!' });
            return;
        }

        duration = Number(duration);
        if (!duration || duration < 1 || duration > 100) {
            handleError({
                message: 'Duration should be a number in the range 1-100!',
            });
            return;
        }

        if (
            typeof destination !== 'string' ||
            typeof city !== 'string' ||
            typeof departureDate !== 'string' ||
            typeof imgUrl !== 'string'
        ) {
            handleError({
                message: 'Data should be in correct format!',
            });
            return;
        }
        const { id } = authService.getAuthData();

        itemService
            .add({
                destination,
                city,
                duration,
                departureDate,
                imgUrl,
                creator: id,
            })
            .then((data) => {
                handleNotification({
                    message: 'New destination successfully created!',
                });
                router('/');
            });
    },
    onEditSubmit(e, itemId) {
        e.preventDefault();

        let formData = new FormData(e.target);
        let destination = formData.get('destination');
        let city = formData.get('city');
        let duration = formData.get('duration');
        let departureDate = formData.get('departureDate');
        let imgUrl = formData.get('imgUrl');

        if (
            destination === '' ||
            city === '' ||
            duration === '' ||
            departureDate === '' ||
            imgUrl === ''
        ) {
            handleError({ message: 'All fields should be filled!' });
            return;
        }

        duration = Number(duration);
        if (!duration || duration < 1 || duration > 100) {
            handleError({
                message: 'Duration should be a number in the range 1-100!',
            });
            return;
        }
        const updateObj = {
            destination,
            city,
            duration,
            departureDate,
            imgUrl,
        };

        itemService.update(itemId, updateObj).then((data) => {
            handleNotification({ message: 'Successfully edited destination' });
            router(`/details/${itemId}`);
        });
    },
    onItemDelete(e, itemId) {
        e.preventDefault();
        itemService.delete(itemId).then((data) => {
            handleNotification({ message: 'Destination deleted.' });
            router('/dashboard');
        });
    },
};
