const express = require("express");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const uniqid = require("uniqid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const sessionObj = {};

app.use(express.urlencoded({ extended: true }));

const session = function (options) {
  return (req, res, next) => {
    if (!req.cookies.id) {
      //first entry, no cookie yet
      const cookieId = uniqid();
      sessionObj[cookieId] = {};
      res.cookie("id", cookieId);
    } else {
      let cookieId = req.cookies.id;
      req.session = sessionObj[cookieId];
    }
    next();
  };
};

app.use(cookieParser());
// app.use(session());
app.use(
  expressSession({
    secret: "My secred key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }),
);

app.get("/", (req, res) => {
  //   res.cookie("CUSTOM_COOKIE", "SOME COOKIE VALUE");
  res.send(`Hello, ${req.session?.username}!`);
});

app.get("/show", (req, res) => {
  console.log(req.cookies);
  res.json(req.cookies);
});

// Session
app.get("/login/:username", (req, res) => {
  req.session.username = req.params.username;
  res.send("You have been logged");
});

app.get("/password/:password", (req, res) => {
  const password = req.params.password;

  const saltRounds = 9;

  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) console.log(err);
    bcrypt.hash(password, salt, (err, hash) => {
      req.session.passwordHash = JSON.stringify(hash);
      console.log(hash);
    });
  });
  res.send("You have been logged");
});

app.get("/compare/:password", (req, res) => {
  //   let hash = "$2b$09$ykAs2ITZWq91VENkHPFZgOTALyrKtp.fB2SdubZy39ylh3AoVU/Qy";
  let hash = req.session.passwordHash;
  console.log("hash", req.session.passwordHash);
  const password = req.params.password;
  console.log("password", req.session.username);
  bcrypt.compare(password, hash, (err, isIdentical) => {
    if (isIdentical) {
      res.send("You are authenticated");
    } else {
      res.send("Wrong password");
    }
  });
});

app.get("/session", (req, res) => {
  res.send(req.session);
});

app.get("/create-json-token", (req, res) => {
  res.send(`
    <form action="/create-json-token" method="POST">
        <input name="username" type="text" placeholder="username"/>
        <input name="password" type="password" placeholder="password"/>
        <input type="submit" value="submit">
    </form>
  `);
});

app.post("/create-json-token", async (req, res) => {
  const header = { expiresIn: "2d" };

  const hashedPassword = await bcrypt.hash(req.body.password, 9);

  const payloads = {
    _id: uniqid(),
    username: req.body.username,
    password: hashedPassword,
  };
  const secret = "mysecretsecret";

  const token = jwt.sign(payloads, secret, header);
  res.cookie("jwt", token);
  //   res.json({ token });
  res.redirect("/token/show");
});

app.get("/token/show", (req, res) => {
  let token = req.cookies.jwt;
  const secret = "mysecretsecret";

  const decodedToken = jwt.verify(token, secret);

  res.json(decodedToken);
});

app.get("/login-json-token", (req, res) => {
  res.send(`
      <form action="/login-json-token" method="POST">
          <input name="username" type="text" placeholder="username"/>
          <input name="password" type="password" placeholder="password"/>
          <input type="submit" value="submit">
      </form>
    `);
});

app.post("/login-json-token", async (req, res) => {
  let token = req.cookies.jwt;
  const secret = "mysecretsecret";

  const decodedToken = jwt.verify(token, secret);

  if (req.body.username !== decodedToken.username) {
    return res.status(400).send("User not found!");
  }

  const isIdentical = await bcrypt.compare(
    req.body.password,
    decodedToken.password,
  );

  if (isIdentical) {
    res.send(`Hello, ${req.body.username}. You are logged in!`);
  } else {
    res.status(400).send("Invalid password!");
  }
});

app.listen(5000, () => {
  console.log("Server listening on port 5000 ...");
});
