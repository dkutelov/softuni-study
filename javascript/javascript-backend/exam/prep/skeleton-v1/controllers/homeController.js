const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home", {
    name: "Joe",
  });
});

module.exports = router;
