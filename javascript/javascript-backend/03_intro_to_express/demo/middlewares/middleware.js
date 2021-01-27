function middleware(req, res, next) {
  console.log("Hello, from middleware");
  console.log(req.params);
  if (req.params.id) {
    next();
    return;
  }

  res.status(403).send("You need to specify cat id!");
}

module.exports = middleware;
