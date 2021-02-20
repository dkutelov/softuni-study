const router = require("express").Router();
const courseService = require("../services/courseService");

router.get("/", (req, res) => {
  if (!req.user) {
    courseService.getAll().then((courses) => {
      res.render("ghome", { courses });
    });
  } else {
    res.redirect("/courses");
  }
});

module.exports = router;
