const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { SECRET } = require("../config/config");

router.post("/register", (req, res) => {
  let user = new User(req.body);
  user.save().then((user) => {
    console.log(user);
    res.status(201).json({ id: user._id });
  });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  User.findOne({ username, password }).then((user) => {
    console.log(user);
    const token = jwt.sign(
      {
        _id: user._id,
        username: user.username,
      },
      SECRET,
      {
        expiresIn: "2h",
      },
    );

    res.status(200).json({
      objectId: user._id,
      "user-token": token,
      username: user.username,
    });
  });
});

module.exports = router;
