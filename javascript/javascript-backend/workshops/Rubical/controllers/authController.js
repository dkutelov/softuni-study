const router = require("express").Router();
const authService = require("../services/authService");
const { COOKIE_NAME } = require("../config/config");
const isAuthenticated = require("../middlewares/isAuthenticated");
const isGuest = require("../middlewares/isGuest");

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

router.post("/register", isGuest, async (req, res) => {
  const { username, password, repeatPassword } = req.body;

  if (password !== repeatPassword) {
    res.render("register", { message: "Passwords mismatch" });
    return;
  }

  try {
    const user = await authService.register({ username, password });
    console.log(user);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.render("register", { error });
  }
});

router.get("/logout", isAuthenticated, (req, res) => {
  res.clearCookie(COOKIE_NAME);
  res.redirect("/");
});

module.exports = router;
