const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { auth } = require("../middlewares/isAutheticated");
// can use cors module cors
// const cors = require("../middlewares/cors");

module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());
  app.use(auth);
};
