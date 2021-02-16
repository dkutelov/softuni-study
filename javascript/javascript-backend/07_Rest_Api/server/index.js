const app = require("express")();
const routes = require("./routes");

require("./config/express")(app);
require("./config/db")();

app.use("/api", routes);

app.listen(5000, console.log.bind(console, "Server starterted at port 5000!"));
