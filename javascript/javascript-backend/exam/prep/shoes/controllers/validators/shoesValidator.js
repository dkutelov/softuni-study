function isEmtpy(data) {
  const propNames = Object.keys(data);
  return !(propNames.length === propNames.filter((k) => data[k]).length);
}

module.exports = function ({ name, price, description, imageUrl, brand }) {
  let errors = [];
  if (
    isEmtpy({
      name,
      price,
      description,
      imageUrl,
      brand,
    })
  ) {
    errors.push("Fields can not be empty!");
  }

  if (isNaN(price) || price < 0) {
    errors.push("Price should be a number greater then 0!");
  }

  if (
    !imageUrl.match(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
    )
  ) {
    errors.push("The imageUrl should starts with http or https!");
  }

  return {
    error: { message: errors.join(" ") },
  };
};
