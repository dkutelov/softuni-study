const { Router } = require('express');
const isAuthenticated = require('../middlewares/isAuthenticated');
const validateItem = require('./validators/itemValidator');
const itemService = require('../services/itemService');
const authService = require('../services/authService');

const router = Router();

router.get('/', async (req, res) => {
    const articles = await itemService.getAll();
    res.render('home', { articles });
});

router.get('/all', async (req, res) => {
    const items = await itemService.getAllTitles();
    res.render('item/allItems', { items });
});

router.get('/search', async (req, res) => {
    const { text } = req.query;
    const items = await itemService.getAllTitles(text);
    res.render('search-results', { items });
});

// C R E A T E
router.get('/create', isAuthenticated, (req, res) => {
    res.render('item/create');
});

router.post('/create', isAuthenticated, async (req, res) => {
    //TODO abstract item validation in a function that takes req.body and render template name
    let { title, description } = req.body;

    const { error } = validateItem({
        title,
        description,
    });

    if (error.message) {
        res.render('item/create', {
            error,
            title,
            description,
        });
        return;
    }

    const user = req.user;
    try {
        const newArtilce = await itemService.create(
            { title, description },
            user
        );
        await authService.addArtice(user._id, newArtilce._id);
        res.redirect('/');
    } catch (error) {
        res.render('item/create', {
            error: { message: error.message },
            title,
            description,
        });
    }
});

// D E T A I L
router.get('/:itemId', (req, res, next) => {
    const itemId = req.params.itemId;
    const user = req.user;

    itemService
        .findOneById(itemId, user)
        .then((item) => {
            item.description = item.description.split('\r\n').filter((x) => x);
            res.render('item/details', item);
        })
        .catch(next);
});

// E D I T
router.get('/:itemId/edit', isAuthenticated, (req, res, next) => {
    const itemId = req.params.itemId;
    const user = req.user;
    itemService
        .findOneById(itemId, user)
        .then((item) => {
            res.render('item/edit', item);
        })
        .catch(next);
});

router.post('/:itemId/edit', isAuthenticated, (req, res, next) => {
    const user = req.user;
    const itemId = req.params.itemId;
    let { description } = req.body;

    if (description.length < 20) {
        res.render('item/edit', {
            error: {
                message: 'Description should be more then 20 characters!',
            },
            _id: itemId,
            description,
        });
        return;
    }

    itemService
        .editOne(itemId, description)
        .then((item) => {
            if (!item) {
                next({ message: 'No item found or no authorization' });
                return;
            }

            res.redirect(`/articles/${itemId}`);
        })
        .catch(next);
});

// D E L E T  E
//TODO remove from user as well
router.get('/:itemId/delete', isAuthenticated, (req, res, next) => {
    const itemId = req.params.itemId;
    const user = req.user;

    authService.isAutor(user._id, itemId).then((isAuthor) => {
        if (!isAuthor) {
            res.redirect(`/articles/{{itemIs}}`);
        }
        itemService
            .deleteOne(itemId, user)
            .then((result) => {
                authService.removeArtice(user._id, itemId);
                res.redirect(`/articles/all`);
            })
            .catch(next);
    });
});

module.exports = router;
