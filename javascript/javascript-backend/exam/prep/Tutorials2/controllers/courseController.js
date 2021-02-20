const { Router } = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");
const validateItem = require("./validators/itemValidator");
const courseService = require("../services/courseService");

const router = Router();

router.get("/", async (req, res) => {
  const courses = await courseService.getAll(req.user, "");
  res.render("home", { courses });
});

// C R E A T E
router.get("/create", isAuthenticated, (req, res) => {
  res.render("courses/create");
});

router.post("/create", isAuthenticated, async (req, res) => {
  let { title, description, imageUrl, isPublic } = req.body;

  const { error } = validateItem({
    title,
    description,
    imageUrl,
  });

  if (error.message) {
    res.render("courses/create", {
      error,
      title,
      description,
      imageUrl,
    });
    return;
  }

  if (isPublic && isPublic === "on") {
    isPublic = true;
  }

  const user = req.user;
  try {
    await courseService.create(
      { title, description, imageUrl, isPublic },
      user,
    );
    res.redirect("/courses");
  } catch (error) {
    res.render("courses/create", {
      error: { message: error.message },
      title,
      description,
      imageUrl,
    });
  }
});

// D E T A I L
router.get("/:itemId", isAuthenticated, (req, res, next) => {
  const itemId = req.params.itemId;
  const user = req.user;
  courseService
    .findOneById(itemId, user)
    .then((item) => {
      res.render("courses/details", item);
    })
    .catch(next);
});

//B O O K
router.get("/:courseId/book", isAuthenticated, (req, res) => {
  const courseId = req.params.courseId;
  const user = req.user;
  courseService
    .bookCourse(courseId, user)
    .then((course) => {
      res.redirect(`/courses/${courseId}`);
    })
    .catch((error) => {
      console.log(error.message || error.reason);
    });
});

// E D I T
router.get("/:itemId/edit", isAuthenticated, (req, res, next) => {
  const itemId = req.params.itemId;
  const user = req.user;
  courseService
    .findOneById(itemId, user)
    .then((item) => {
      // if (!item.isCreator) {
      //     next({
      //         error: {
      //             message: 'You are not authorized to edit this hotel!',
      //         },
      //     });
      // }
      res.render("courses/edit", item);
    })
    .catch(next);
});

router.post("/:itemId/edit", isAuthenticated, (req, res, next) => {
  const user = req.user;
  const itemId = req.params.itemId;
  let { title, description } = req.body;

  const { error } = validateItem({
    title,
    description,
  });

  console.log("error: ", error);

  if (error.message) {
    res.render("courses/edit", {
      error,
      _id: itemId,
      title,
      description,
    });
    return;
  }

  courseService
    .editOne(itemId, user, { title, description })
    .then((item) => {
      if (!item) {
        next({ message: "No item found or no authorization" });
        return;
      }

      res.redirect(`/courses/${itemId}`);
    })
    .catch(next);
});

// D E L E T  E
router.get("/:itemId/delete", isAuthenticated, (req, res) => {
  const itemId = req.params.itemId;
  const user = req.user;
  courseService
    .deleteOne(itemId, user)
    .then((result) => {
      //TODO if item not found
      res.redirect(`/`);
    })
    .catch(next);
});

module.exports = router;
