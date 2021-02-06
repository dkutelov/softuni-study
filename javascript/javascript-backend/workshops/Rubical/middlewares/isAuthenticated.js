// guading middleware
module.exports = (req, res, next) => {
  console.log(req.user);
  if (!req.user) {
    res.redirect("/auth/login");
    return;
  }
  next();
};
