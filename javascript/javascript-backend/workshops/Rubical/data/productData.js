const path = require("path");
const fs = require("fs/promises");
const productsData = require("../data/products.json"); // parses directly

module.exports = {
  create(product) {
    productsData.push(product);
    return fs.writeFile(
      path.resolve("data/products.json"),
      JSON.stringify(productsData)
    );
  },
  getAll() {
    return productsData;
  },
  getOne(id) {
    return productsData.find((x) => x.id == id);
  },
};
