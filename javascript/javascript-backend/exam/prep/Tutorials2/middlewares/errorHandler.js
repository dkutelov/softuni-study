const errorHandler = (err, req, res, next) => {
    // {
    //     message: 'asdasdasd',
    //     type: 'error',
    //     statusCode: 500
    // }

    err.status = err.status || 500;
    err.message = err.message || 'Something went wrong';
    console.log('error from errorHandler', err);
    res.status(err.status).render('home', { error: err });
};

module.exports = errorHandler;
