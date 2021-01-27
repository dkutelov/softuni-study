const pubSub = require("./pubSub");

const names = [];

const onHumanRequest = (name) => {
  if (names.includes(name)) {
    console.log("Hello again, " + name);
  } else {
    names.push(name);
    console.log("Welcome, " + name);
  }
};

pubSub.subscribe("humans", onHumanRequest);
