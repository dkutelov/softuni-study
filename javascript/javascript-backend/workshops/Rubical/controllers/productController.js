const { Router } = require("express");
const validator = require("validator");

const productService = require("../services/productService");
const accessoryService = require("../services/accessoryService");
const isAuthenticated = require("../middlewares/isAuthenticated");

const router = Router();

const options = [
  { id: 1, name: "1 - Very Easy" },
  { id: 2, name: "2 - Easy" },
  { id: 3, name: "3 - Medium (Standard 3x3)" },
  { id: 4, name: "4 - Intermediate" },
  { id: 5, name: "5 - Expert" },
  { id: 6, name: "6 - Hard" },
];

router.get("/", async (req, res) => {
  let products = await productService.getAll(req.query);
  res.render("index", {
    title: "Home",
    products,
  });
});

router.get("/create", isAuthenticated, (req, res) => {
  res.render("create", {
    title: "Create",
    options,
  });
});

router.get("/:productId/edit", isAuthenticated, async (req, res) => {
  const product = await productService.getOne(req.params.productId);
  res.render("editCube", {
    ...product,
    options,
  });
});

router.post("/:productId/edit", isAuthenticated, async (req, res) => {
  // validation
  try {
    const updatedProduct = await productService.updateOne(
      req.params.productId,
      req.body,
    );

    res.redirect(`/details/${req.params.productId}`);
  } catch (error) {}
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

router.post("/create", isAuthenticated, (req, res, next) => {
  productService
    .create(req.user.id, req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch(next);
});

router.get("/details/:id", async (req, res) => {
  const productId = req.params.id;
  let product = await productService.getOneWithAccessories(productId);

  res.render("details", {
    title: `product details ${productId}`,
    product,
  });
});

router.get("/:id/attach", isAuthenticated, async (req, res) => {
  const productId = req.params.id;
  let product = await productService.getOne(productId);
  let accessories = await accessoryService.getAllWithout(product.accessories);

  res.render("attachAccessory", {
    product,
    accessories,
  });
});

router.post("/:id/attach", isAuthenticated, async (req, res) => {
  const productId = req.params.id;
  productService
    .attachAccessory(productId, req.body.accessory)
    .then(() => res.redirect(`/details/${productId}`));
});

router.get("/:productId/delete", isAuthenticated, async (req, res) => {
  const product = await productService.getOne(req.params.productId);
  res.render("deleteCube", {
    ...product,
  });
});

router.delete("/:productId/edit", isAuthenticated, async (req, res) => {
  // validation
  try {
    await productService.deleteOne(req.params.productId);

    res.redirect(`/`);
  } catch (error) {}
});

module.exports = router;
