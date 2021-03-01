const router = require("express").Router();

const authService = require("../services/authService");
const { COOKIE_NAME } = require("../config/config");
const {
  validateRegister,
  validateLogin,
} = require("./validators/userValidator");

const isGuest = require("../middlewares/isGuest");
const isAuthenticated = require("../middlewares/isAuthenticated");

router.get("/register", isGuest, (req, res) => {
  res.render("register");
});

router.post("/register", isGuest, (req, res, next) => {
  const userData = req.body;
  userData.username = userData.username.toLowerCase();
  userData.amount = Number(userData.amount);
  req.afterErrorPage = "register";

  const { error } = validateRegister(userData);

  if (error.message) {
    return next(error);
  }

  authService
    .register(userData.username, userData.password, userData.amount)
    .then(() => {
      authService.login(userData.username, userData.password).then((token) => {
        res.cookie(COOKIE_NAME, token, { httpOnly: true });
        res.redirect("/");
      });
    })
    .catch(next);
});

router.get("/login", isGuest, (req, res) => {
  res.render("login");
});

router.post("/login", isGuest, (req, res, next) => {
  const userData = req.body;
  userData.username = userData.username.toLowerCase();
  req.afterErrorPage = "login";

  const { error } = validateLogin(userData);

  if (error.message) {
    return next(error);
  }

  authService
    .login(userData.username, userData.password)
    .then((token) => {
      res.cookie(COOKIE_NAME, token, { httpOnly: true });
      res.redirect("/");
    })
    .catch(next);
});

router.post("/increase", isAuthenticated, (req, res, next) => {
  let { value } = req.body;
  value = Number(value);

  if (!value || isNaN(value)) return;

  authService
    .changeAmount(value, req.user._id)
    .then(() => {
      res.redirect("/");
    })
    .catch(next);
});

router.get("/profile", isAuthenticated, (req, res, next) => {
  authService
    .getProfileData(req.user._id)
    .then((profile) => {
      profile.totalExpenses = profile.expenses.reduce(
        (acc, exp) => acc + exp.total,
        0,
      );
      res.render("profile", profile);
    })
    .catch(next);
});

router.get("/logout", isAuthenticated, (req, res) => {
  res.clearCookie(COOKIE_NAME);
  res.redirect("/");
});

module.exports = router;
