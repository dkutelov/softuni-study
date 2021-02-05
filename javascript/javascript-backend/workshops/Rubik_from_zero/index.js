const app = require("express")();


const config = require("./config/config");
const routes = require("./routes");

require("./config/express")(app);
require("./config/db")();

app.use(routes);

app.listen(config.PORT, () => {
  console.log(`Server is listening on port ${config.PORT}!`);
});
