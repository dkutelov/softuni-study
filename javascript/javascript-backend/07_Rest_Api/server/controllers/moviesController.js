const router = require("express").Router();
const Movie = require("../models/Movie");

router.post("/", (req, res) => {
  let movie = new Movie(req.body);
  movie.save().then((movie) => {
    console.log(movie);
    res.status(201).json({ objectId: movie._id });
  });
});

module.exports = router;
