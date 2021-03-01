const Handlebars = require("handlebars");
const { CATEGORIES } = require("./config");

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
  getCategoryName(cat) {
    const category = CATEGORIES.find((c) => c.id === cat);
    return category.name;
  },
  formatTotal(total) {
    return total.toFixed(2);
  },
  formatDescription(text) {
    let words = text.split(" ").filter((x) => x);
    if (words.length < 3) {
      return text;
    }
    return (words = words.slice(0, 3).join(" ") + "...");
  },
};
