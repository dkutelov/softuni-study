function errorHandler(err, req, res, next) {
  if (!err) return;
  console.log(err);
  res.status(500).render("index", { error: err });
}

module.exports = errorHandler;
