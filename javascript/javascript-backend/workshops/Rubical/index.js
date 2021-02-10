const app = require("express")();

const config = require("./config/config");
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");
require("./config/express")(app);
require("./config/db")();

app.use(routes);

app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Server is listening on port ${config.PORT}!`);
});
