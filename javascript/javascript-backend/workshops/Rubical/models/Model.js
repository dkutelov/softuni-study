const path = require("path");
const fs = require("fs/promises");
const productsData = require("../data/products.json");

class Model {
  create() {
    productsData.push(this);
    return fs.writeFile(
      path.resolve("data/products.json"),
      JSON.stringify(productsData),
    );
  }

  static getAll() {
    return productsData;
  }

  static getOne(id) {
    return productsData.find((x) => x.id == id);
  }
}

module.exports = Model;
