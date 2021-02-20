const app = require("express")();

require("./config/mongoose")();
require("./config/express")(app);
const { PORT } = require("./config/config");
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("server is running");
});
