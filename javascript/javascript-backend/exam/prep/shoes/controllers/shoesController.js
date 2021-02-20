const { Router } = require('express');

const isAuthenticated = require('../middlewares/isAuthenticated');
const shoesValidator = require('./validators/shoesValidator');
const shoesService = require('../services/shoesService');
const authService = require('../services/authService');

const router = Router();

router.get('/', async (req, res) => {
    const shoes = await shoesService.getAll();
    res.render('shoes/all', { shoes });
});

// C R E A T E
router.get('/create', isAuthenticated, (req, res) => {
    res.render('shoes/create');
});

router.post('/create', isAuthenticated, async (req, res, next) => {
    let shoes = req.body;
    shoes.price = Number(shoes.price);
    req.afterErrorPage = 'shoes/create';
    req.errorHandlerData = shoes;

    const { error } = shoesValidator(shoes);

    if (error.message) {
        return next(error);
    }

    const user = req.user;
    try {
        await shoesService.create(shoes, user);
        res.redirect('/');
    } catch (err) {
        next(err);
    }
});

// D E T A I L
router.get('/:itemId', isAuthenticated, (req, res, next) => {
    const itemId = req.params.itemId;
    const user = req.user;
    shoesService
        .findOneById(itemId, user)
        .then((item) => {
            res.render('shoes/details', item);
        })
        .catch(next);
});

// B O O K
// router.get('/:courseId/book', isAuthenticated, (req, res) => {
//     const courseId = req.params.courseId;
//     const user = req.user;
//     shoesService
//         .bookCourse(courseId, user)
//         .then((course) => {
//             res.redirect(`/courses/${courseId}`);
//         })
//         .catch((error) => {
//             console.log(error.message || error.reason);
//         });
// });

// E D I T
router.get('/:itemId/edit', isAuthenticated, (req, res, next) => {
    const itemId = req.params.itemId;
    shoesService
        .getOne(itemId)
        .then((item) => {
            res.render('shoes/edit', item);
        })
        .catch(next);
});

router.post('/:itemId/edit', isAuthenticated, (req, res, next) => {
    const itemId = req.params.itemId;
    let shoes = req.body;
    shoes.price = Number(shoes.price);
    shoes._id = itemId;
    req.afterErrorPage = `shoes/edit`;
    req.errorHandlerData = shoes;

    const { error } = shoesValidator(shoes);

    if (error.message) {
        return next(error);
    }

    shoesService
        .editOne(itemId, shoes)
        .then((item) => {
            if (!item) {
                next({ message: 'No item found or no authorization' });
                return;
            }

            res.redirect(`/shoes/${itemId}`);
        })
        .catch(next);
});

// D E L E T  E
router.get('/:itemId/delete', isAuthenticated, (req, res, next) => {
    const itemId = req.params.itemId;
    const user = req.user;
    shoesService
        .deleteOne(itemId)
        .then(() => {
            return authService.removedFromBought(itemId, user._id);
        })
        .then(() => {
            res.redirect(`/shoes`);
        })
        .catch(next);
});

//  B U Y
router.get('/:itemId/buy', isAuthenticated, (req, res, next) => {
    const itemId = req.params.itemId;
    const { _id } = req.user;
    shoesService
        .buyShoes(itemId, _id)
        .then(() => {
            return authService.buyShoes(itemId, _id);
        })
        .then(() => {
            res.redirect(`/shoes/${itemId}`);
        })
        .catch(next);
});

module.exports = router;
