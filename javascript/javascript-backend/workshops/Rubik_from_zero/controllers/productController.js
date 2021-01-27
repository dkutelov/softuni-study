const { Router } = require("express");
const productService = require("../services/productService");

const router = Router();

router.get("/", (req, res) => {
  let products = productService.getAll(req.query);
  res.render("index", {
    title: "Home",
    products,
  });
});

router.get("/create", (req, res) => {
  res.render("create", {
    title: "Create",
  });
});

function validateProduct(req, res, next) {
  let isValid = true;
  if (req.body.name.trim().length < 2) {
    isValid = false;
  } else if (!req.body.imageUrl) {
    isValid = false;
  }

  if (isValid) {
    next();
  }
}

router.post("/create", validateProduct, (req, res) => {
  // Validate inputs
  //   productService.create(req.body, (err) => {
  //     if (err) {
  //       return res.status(500).end();
  //     }
  //     res.redirect("/");
  //   });
  productService
    .create(req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => res.send(500).end());
});

router.get("/details/:id", (req, res) => {
  const productId = req.params.id;
  let product = productService.getOne(productId);
  res.render("details", {
    title: `product details ${productId}`,
    product,
  });
});

module.exports = router;
