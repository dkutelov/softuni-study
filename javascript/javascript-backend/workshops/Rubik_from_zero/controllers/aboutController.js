const { Router } = require("express");
const accessoryService = require("../services/accessoryService");

const router = Router();

router.post("/create", (req, res) => {
  accessoryService
    .create(req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => res.send(500).end());
});

module.exports = router;
