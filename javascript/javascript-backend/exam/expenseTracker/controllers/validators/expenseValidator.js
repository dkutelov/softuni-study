const { CATEGORIES } = require("../../config/config");

function isEmtpy(data) {
  const propNames = Object.keys(data);
  return !(propNames.length === propNames.filter((k) => data[k]).length);
}

module.exports = function (data) {
  const { merchant, total, description, category } = data;
  let errors = [];
  if (isEmtpy({ merchant, total, description, category })) {
    errors.push("Fields can not be empty!");
  }

  if (merchant.length < 4) {
    errors.push("The merchant should be at least 4 characters long!");
  }

  if (description.length < 3 || description > 30) {
    errors.push(
      "The description should be minimum 3 characters long and 30 characters maximum!",
    );
  }

  if (isNaN(total) || total < 0) {
    errors.push("The total should be positive number! ");
  }

  if (
    !category ||
    category === "default" ||
    !CATEGORIES.map((c) => c.id).includes(category)
  ) {
    errors.push("Please, select correct category!");
  }

  return {
    error: { message: errors.join(" ") },
  };
};
