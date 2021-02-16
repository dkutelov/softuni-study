const router = require("express").Router();
const authController = require("./controllers/authController");
const moviesController = require("./controllers/moviesController");

router.use("/auth", authController);
router.use("/movies", moviesController);

module.exports = router;
