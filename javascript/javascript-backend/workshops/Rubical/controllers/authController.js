const router = require("express").Router();
const validator = require("validator");
const { check, validationResult } = require("express-validator");

const authService = require("../services/authService");
const { COOKIE_NAME } = require("../config/config");
const isAuthenticated = require("../middlewares/isAuthenticated");
const isGuest = require("../middlewares/isGuest");
const { TokenExpiredError } = require("jsonwebtoken");

router.get("/login", isGuest, (req, res) => {
  res.render("login");
});

router.post("/login", isGuest, async (req, res) => {
  const { username, password } = req.body;

  try {
    const token = await authService.login({ username, password });
    res.cookie("USER_SESSION", token);
    res.redirect("/");
  } catch (error) {
    res.render("login", { error });
  }
});

router.get("/register", isGuest, (req, res) => {
  res.render("register");
});

const passwordsMiddleware = (req, res, next) => {
  const { password } = req.body;

  let isStrongPassword = validator.isStrongPassword(password, {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    returnScore: false,
    pointsPerUnique: 1,
    pointsPerRepeat: 0.5,
    pointsForContainingLower: 10,
    pointsForContainingUpper: 10,
    pointsForContainingNumber: 10,
    pointsForContainingSymbol: 10,
  });

  if (!isStrongPassword) {
    res.render("register", { message: "You should have strong password!" });
  }

  next();
};

router.post(
  "/register",
  isGuest,
  check("username", "Specify username").notEmpty(),
  check("password", "Password too short").isLength({ min: 5 }),
  async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    // let isStrongPassword = validator.isStrongPassword(password, {
    //   minLength: 8,
    //   minLowercase: 1,
    //   minUppercase: 1,
    //   minNumbers: 1,
    //   minSymbols: 1,
    //   returnScore: false,
    //   pointsPerUnique: 1,
    //   pointsPerRepeat: 0.5,
    //   pointsForContainingLower: 10,
    //   pointsForContainingUpper: 10,
    //   pointsForContainingNumber: 10,
    //   pointsForContainingSymbol: 10,
    // });

    //let errors = validationResult(req); // object with array errors -> #each errors ->{{msg}}

    try {
      // catch will capture the error
      // if (!isStrongPassword) {
      //   throw { error: { message: "You should have strong password!" } };
      // }

      if (password !== repeatPassword) {
        throw { error: { message: "Passwords mismatch" } };
      }

      const user = await authService.register({ username, password });
      console.log(user);
      res.redirect("/");
    } catch (err) {
      console.log(err.errors);
      let error = err;
      if (err.errors) {
        error = Object.keys(err.errors).map((x) => {
          message: err.errors[x].properties.message;
        })[0];
      }
      console.log(error);
      res.render("register", { ...error, username: req.body.username });
    }
  },
);

router.get("/logout", isAuthenticated, (req, res) => {
  res.clearCookie(COOKIE_NAME);
  res.redirect("/");
});

module.exports = router;
