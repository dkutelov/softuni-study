const { Router } = require("express");
const productController = require("./controllers/productController");
const aboutController = require("./controllers/aboutController");
const accessoryController = require("./controllers/accessoryController");
const authController = require("./controllers/authController");

const router = Router();

//router.use("/products", productController);
router.use("/", productController);
router.use("/auth", authController);
router.use("/about", aboutController);
router.use("/accessories", accessoryController);
router.get("*", (req, res) => {
  res.render("404", { title: "Page not found!" });
});

module.exports = router;
// module.exports = options => router; // if we need to pass args
// /products/4230928423/comments
