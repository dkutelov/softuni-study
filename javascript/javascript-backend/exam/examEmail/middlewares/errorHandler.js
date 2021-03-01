function getError(err) {
  return !err.errors
    ? err.message
    : Object.keys(err.errors)
        .map((k) => {
          return err.errors[k].properties.message;
        })
        .join(" ");
}

const errorHandler = (error, req, res, next) => {
  const afterErrorPage = req.afterErrorPage || "home";
  const data = req.errorHandlerData || {};
  console.log("Error from errorHandler.js: ", error);
  error.message = getError(error) || "Something went wrong";
  res.render(afterErrorPage, { error, ...data });
};

module.exports = errorHandler;
