function isEmtpy(data) {
  const propNames = Object.keys(data);
  return !(propNames.length === propNames.filter((k) => data[k]).length);
}

module.exports = function (data) {
  let errors = [];
  if (isEmtpy(data)) {
    errors.push("Fields can not be empty!");
  }

  // if (isNaN(price) || price < 0) {
  //   errors.push("Price should be a number greater then 0!");
  // }

  if (data.title.length < 5) {
    errors.push("Title should be at least 5 characters!");
  }

  if (
    !data.imageUrl.match(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
    )
  ) {
    errors.push("Please provide valid image url!");
  }

  return {
    error: { message: errors.join(" ") },
  };
};
