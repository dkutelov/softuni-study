const { Router } = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");
const validateItem = require("./validators/itemValidator");
const itemService = require("../services/itemService");

const router = Router();

router.get("/", async (req, res) => {
  if (req.user) {
    const items = await itemService.getAll(req.user, req.query);
    res.render("home", { items });
  } else {
    const items = await itemService.getAll(req.user);
    res.render("home", { items });
  }
});

// C R E A T E
router.get("/create", isAuthenticated, (req, res) => {
  res.render("item/create");
});

router.post("/create", isAuthenticated, async (req, res, next) => {
  let itemData = req.body;
  //shoes.price = Number(shoes.price);
  req.afterErrorPage = "item/create";
  req.errorHandlerData = itemData;

  const { error } = validateItem(itemData);

  if (error.message) {
    return next(error);
  }

  const user = req.user;
  try {
    await itemService.create(itemData, user);
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

// D E T A I L
router.get("/:itemId", isAuthenticated, (req, res, next) => {
  const itemId = req.params.itemId;
  const user = req.user;
  itemService
    .findOneById(itemId, user)
    .then((item) => {
      res.render("item/details", item);
    })
    .catch(next);
});

// B O O K
// router.get('/:courseId/book', isAuthenticated, (req, res) => {
//     const courseId = req.params.courseId;
//     const user = req.user;
//     itemService
//         .bookCourse(courseId, user)
//         .then((course) => {
//             res.redirect(`/courses/${courseId}`);
//         })
//         .catch((error) => {
//             console.log(error.message || error.reason);
//         });
// });

// E D I T
router.get("/:itemId/edit", isAuthenticated, (req, res, next) => {
  const itemId = req.params.itemId;
  const user = req.user;
  itemService
    .findOneById(itemId, user)
    .then((item) => {
      // if (!item.isCreator) {
      //     next({
      //         error: {
      //             message: 'You are not authorized to edit this hotel!',
      //         },
      //     });
      // }
      res.render("item/edit", item);
    })
    .catch(next);
});

router.post("/:itemId/edit", isAuthenticated, (req, res, next) => {
  const itemId = req.params.itemId;
  let items = req.body;
  //items.price = Number(shoes.price);
  items._id = itemId;
  req.afterErrorPage = `item/edit`;
  req.errorHandlerData = items;

  const { error } = validateItem(items);

  if (error.message) {
    return next(error);
  }

  itemService
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
router.get("/:itemId/delete", isAuthenticated, (req, res) => {
  const itemId = req.params.itemId;
  const user = req.user;
  itemService
    .deleteOne(itemId, user)
    .then((result) => {
      //TODO if item not found
      res.redirect(`/items`);
    })
    .catch(next);
});

module.exports = router;
