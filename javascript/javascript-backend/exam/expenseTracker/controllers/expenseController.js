const { Router } = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");
const validateExpense = require("./validators/expenseValidator");
const expenseService = require("../services/expenseService");
const authService = require("../services/authService");
const { CATEGORIES } = require("../config/config");
const router = Router();

router.get("/", async (req, res) => {
  let expenses = [];
  if (req.user) {
    expenses = await expenseService.getAll(req.user);
  }

  res.render("home", { expenses });
});

// C R E A T E
router.get("/create", isAuthenticated, (req, res) => {
  res.render("expense/create", { options: CATEGORIES });
});

router.post("/create", isAuthenticated, async (req, res, next) => {
  let expenseData = req.body;

  expenseData.total = Number(expenseData.total);
  expenseData.report = !!expenseData.report;
  req.afterErrorPage = "expense/create";
  req.errorHandlerData = expenseData;

  const { error } = validateExpense(expenseData);

  if (error.message) {
    return next(error);
  }

  const user = req.user;
  try {
    const newExpense = await expenseService.create(expenseData, user);
    const value = -expenseData.total;
    await authService.changeAmount(value, req.user._id);
    await authService.addExpense(newExpense._id, req.user._id);
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

// D E T A I L
router.get("/:itemId", isAuthenticated, (req, res, next) => {
  const itemId = req.params.itemId;
  const user = req.user;
  expenseService
    .findOneById(itemId, user)
    .then((item) => {
      if (!item || !item.report) {
        res.redirect("/expenses");
      }
      res.render("expense/details", item);
    })
    .catch(next);
});

// E D I T
router.get("/:itemId/edit", isAuthenticated, (req, res, next) => {
  const itemId = req.params.itemId;
  const user = req.user;
  expenseService
    .findOneById(itemId, user)
    .then((item) => {
      res.render("expense/edit", item);
    })
    .catch(next);
});

router.post("/:itemId/edit", isAuthenticated, (req, res, next) => {
  const itemId = req.params.itemId;
  let items = req.body;
  //items.price = Number(shoes.price);
  items._id = itemId;
  req.afterErrorPage = `expense/edit`;
  req.errorHandlerData = items;

  const { error } = validateExpense(items);

  if (error.message) {
    return next(error);
  }

  expenseService
    .editOne(itemId, items)
    .then((item) => {
      if (!item) {
        next({ message: "No item found or no authorization" });
        return;
      }
      res.redirect(`/items/${itemId}`);
    })
    .catch(next);
});

// D E L E T  E
router.get("/:itemId/delete", isAuthenticated, async (req, res, next) => {
  const expenseId = req.params.itemId;
  const user = req.user;

  try {
    await expenseService.deleteOne(expenseId, user);
    await authService.removeExpense(expenseId, req.user._id);
    res.redirect("/expenses");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
