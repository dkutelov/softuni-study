const router = require('express').Router();

router.get('/', (req, res) => {
    res.redirect('/items');
});

module.exports = router;
