const { Router } = require("express");
const productService = require("../services/productService");
const accessoryService = require("../services/accessoryService");

const router = Router();

router.get("/", async (req, res) => {
  let products = await productService.getAll(req.query);
  console.log(products);
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

router.get("/details/:id", async (req, res) => {
  const productId = req.params.id;
  let product = await productService.getOneWithAccessories(productId);

  console.log(product);
  res.render("details", {
    title: `product details ${productId}`,
    product,
  });
});

router.get("/:id/attach", async (req, res) => {
  const productId = req.params.id;
  let product = await productService.getOne(productId);
  let accessories = await accessoryService.getAllWithout(product.accessories);

  res.render("attachAccessory", {
    product,
    accessories,
  });
});

router.post("/:id/attach", async (req, res) => {
  const productId = req.params.id;
  productService
    .attachAccessory(productId, req.body.accessory)
    .then(() => res.redirect(`/details/${productId}`));
});

module.exports = router;
