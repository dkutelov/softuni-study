const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const shoesController = require('./controllers/shoesController');

router.use('/', homeController);
router.use('/auth', authController);
router.use('/shoes', shoesController);

router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;
