const router = require("express").Router();
const authService = require("../services/authService");
const { body, validationResult } = require("express-validator");
const { COOKIE_NAME } = require("../config/config");

router.get("/register", (req, res) => {
  res.render("register");
});

router.post(
  "/register",
  body("rePassword")
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        return Promise.reject("Password missmatch!");
      }
    }),
  (req, res, next) => {
    const { username, password, rePassword } = req.body;

    let errors = validationResult(req).array();

    //TODO abstract to be able to re-use
    if (errors.length > 0) {
      let error = errors[0];

      error.message = error.msg;
      next(errors);
    }

    authService
      .register(username, password)
      .then((createdUser) => {
        console.log(createdUser);
        res.redirect("/auth/login");
        // or return authService.login(username, password)
      }) //.then(token => { }) res.cookie(COOKIE_NAME, token, { httpOnly: true });
      //   res.redirect("/");
      .catch(next);
  },
);

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res, next) => {
  console.log(req.body);
  authService
    .login(username, password)
    .then((token) => {
      res.cookie(COOKIE_NAME, token, { httpOnly: true });
      res.redirect("/");
    })
    .catch(next);
});

router.get("/logout", (req, res) => {
  res.clearCookie(COOKIE_NAME);
  res.redirect("/");
});

module.exports = router;
