function isEmtpy(data) {
  const propNames = Object.keys(data);
  return !(propNames.length === propNames.filter((k) => data[k]).length);
}

module.exports = function ({ title, description, imageUrl }) {
  let errors = [];
  if (
    isEmtpy({
      title,
      description,
      imageUrl,
    })
  ) {
    errors.push("Fields can not be empty!");
  }

  if (title.length < 4) {
    errors.push("The title should be at least 4 characters!");
  }

  if (description.length > 50) {
    errors.push("The description should be max 50 characters!");
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
