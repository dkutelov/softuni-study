const fs = require("fs");
// const uniqid = require("uniqid");
const Cube = require("../models/Cube");

const path = require("path");
const productData = require("../data/productData");
const Accessory = require("../models/Accessory");

async function getAll(query) {
  // let result = productData.getAll()

  let result = await Cube.find({}).lean();

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
  let cube = new Cube(data);

  // data layer
  // return productData.create(cube);

  // class method
  // return cube.create();

  return cube.save();
}

function getOne(id) {
  // return productData.getOne(id);
  return Cube.findById(id).lean();
}
function getOneWithAccessories(id) {
  return Cube.findById(id).populate("accessories").lean();
}

async function attachAccessory(productId, accessoryId) {
  const product = await Cube.findById(productId);
  const accessory = await Accessory.findById(accessoryId);

  product.accessories.push(accessory);
  product.save();
  return product;
}

module.exports = {
  create,
  getAll,
  getOne,
  attachAccessory,
  getOneWithAccessories,
};
