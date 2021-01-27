const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const checkCatIdMiddleware = require("./middlewares/middleware");

const PORT = 5000;
const cats = [{ name: "cat 1" }, { name: "cat 2" }, { name: "cat 3" }];

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hbs-home", (req, res) => {
  const name = "Robert";
  res.render("home", { name });
});

app.get("/cats-list", (req, res) => {
  res.render("cats", { cats });
});

app.get("/cats/:id?", checkCatIdMiddleware, (req, res) => {
  const { id } = req.params;
  //   if (!/\d+/.test(req.params.id)) {
  //     res.status(404).send("You need to sepecify cat number!");
  //     return;
  //     // or: return res.status(404).send("You need to sepecify cat number!");
  //   }
  res.send(`You are looking at the profile of ${id}.`);
});

app.get("/download", (req, res) => {
  res.attachment("./views/home.html");
});

app.get("/home", (req, res) => {
  res.sendFile("./public/html/home.html", {
    root: __dirname,
  });
});

app.post("/cats", (req, res) => {
  console.log(req.body);
  cats.push({ name: req.body.cat });
  res.redirect("/cats-list");
  //   res.status(201);
  //   res.send("Create cat!");
});

app.get("/users/:userId/books/:bookId(\\d+)", function (req, res) {
  res.send(req.params);
});

app.get("/*/cats", function (req, res) {
  res.send("Cute cats");
});

app.get(/.*fly$/, function (req, res) {
  res.send("Regex page");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}!`);
});
