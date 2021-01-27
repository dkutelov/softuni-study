const fs = require("fs");
const uniqid = require("uniqid");
const Cube = require("../models/Cube");

const path = require("path");
const productData = require("../data/productData");

function getAll(query) {
  let result = productData.getAll();

  if (query.search) {
    result = result.filter((x) => x.name.toLowerCase().includes(query.search));
  }

  if (query.from) {
    result = result.filter((x) => Number(x.difficultyLevel) >= query.from);
  }

  if (query.to) {
    result = result.filter((x) => Number(x.difficultyLevel) <= query.to);
  }

  return result;
}

function create(data) {
  let cube = new Cube(
    uniqid(),
    data.name,
    data.description,
    data.imageUrl,
    data.difficultyLevel
  );

  return productData.create(cube);
}

function getOne(id) {
  return productData.getOne(id);
}

module.exports = {
  create,
  getAll,
  getOne,
};
