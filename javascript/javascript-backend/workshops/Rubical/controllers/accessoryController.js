const { Router } = require("express");
const accessoryService = require("../services/accessoryService");
const isAuthenticated = require("../middlewares/isAuthenticated");

const router = Router();

// router.get("/", (req, res) => {
//   res.render("createAccessory", {
//     title: "Create Accessory",
//   });
// });

router.get("/create", isAuthenticated, (req, res) => {
  res.render("createAccessory", {
    title: "Create Accessory",
  });
});

router.post("/create", (req, res) => {
  accessoryService
    .create(req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => res.send(500).end());
});

module.exports = router;
