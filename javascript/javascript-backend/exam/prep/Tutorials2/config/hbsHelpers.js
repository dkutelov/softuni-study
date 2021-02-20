module.exports = {
  formatDate(datetime) {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return datetime.toLocaleDateString("bg-BG", options);
  },
};
