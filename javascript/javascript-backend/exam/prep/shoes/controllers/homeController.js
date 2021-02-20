const router = require('express').Router();

router.get('/', (req, res) => {
    if (!req.user) {
        res.render('home');
    } else {
        res.redirect('/shoes');
    }
});

module.exports = router;
