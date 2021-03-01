const express = require("express");
const handlebars = require("express-handlebars");
const auth = require("../middlewares/auth");
const cookieParser = require("cookie-parser");
const helpers = require("./hbsHelpers");

const { use } = require("../controllers/authController");

module.exports = function (app) {
  app.use(express.static("public"));

  app.engine(
    "hbs",
    handlebars({
      extname: ".hbs",
      helpers,
    }),
  );

  app.set("view engine", "hbs");

  app.use(
    express.urlencoded({
      extended: true,
    }),
  );

  app.use(cookieParser());
  app.use(auth());
};
