const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const itemController = require('./controllers/itemController');

router.use('/', homeController);
router.use('/auth', authController);
router.use('/articles', itemController);

router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;
