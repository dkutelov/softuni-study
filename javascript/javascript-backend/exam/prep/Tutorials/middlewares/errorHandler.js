function errorHandler(error, req, res, next) {
    if (!error) return;
    console.log(error);
    req.session.error = error;
    res.redirect('/');
}

module.exports = errorHandler;
