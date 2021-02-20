function formatMongooseError(err) {
  return Object.keys(err.errors)
    .map((k) => {
      console.log("err props: ", err.errors[k].properties);
      return err.errors[k].properties.message;
    })
    .join(" ");
}

const errorHandler = (error, req, res, next) => {
  const afterErrorPage = req.afterErrorPage || "home";
  const data = req.errorHandlerData || {};
  console.log("is true", error.message);
  // there is error message
  error.message =
    error.message || formatMongooseError(error) || "Something went wrong";
  // console.log("ErrorHandler: ", error);
  res.render(afterErrorPage, { error, ...data });
};

module.exports = errorHandler;

// let error = Object.keys(err?.errors).map(x => ({ message: err.errors[x].properties.message}))[0]
