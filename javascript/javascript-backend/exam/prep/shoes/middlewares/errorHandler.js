function formatMongooseError(err) {
    return Object.keys(err.errors)
        .map((k) => err.errors[k])
        .join(' ');
}

const errorHandler = (error, req, res, next) => {
    const afterErrorPage = req.afterErrorPage || 'home';
    const data = req.errorHandlerData || {};
    console.log(data);
    error.message =
        error.message || formatMongooseError(error) || 'Something went wrong';
    console.log('ErrorHandler: ', error);
    res.render(afterErrorPage, { error, ...data });
};

module.exports = errorHandler;
