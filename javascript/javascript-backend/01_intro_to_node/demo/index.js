const logger = require("./logger");
const _ = require("lodash");
const fs = require("fs");

fs.readFile();

let firstName = "Hasan";
console.log(firstName);
logger("Hi, there");

// Output:
// From logger.js file // logger.js:1
// Hasan // index.js:4
// >>> Hi, there <<<  // logger.js:1
