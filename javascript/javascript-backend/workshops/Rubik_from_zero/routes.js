const { Router } = require("express");
const productController = require("./controllers/productController");
const aboutController = require("./controllers/aboutController");

const router = Router();

//router.use("/products", productController);
router.use("/", productController);
router.use("/about", aboutController);
router.get("*", (req, res) => {
  res.render("404", { title: "Page not found!" });
});

module.exports = router;
// module.exports = options => router; // if we need to pass args
// /products/4230928423/comments
