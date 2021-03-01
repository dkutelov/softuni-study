const Handlebars = require("handlebars");

module.exports = {
  option(value, label, selectedValue) {
    const selectedProperty =
      value == selectedValue ? 'selected="selected"' : "";
    return new Handlebars.SafeString(
      '<option value="' +
        value +
        '"' +
        selectedProperty +
        ">" +
        label +
        "</option>",
    );
  },
};
