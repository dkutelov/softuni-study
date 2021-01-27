const http = require("http");
const handlers = require("./handlers");

const PORT = 5000;

const app = http.createServer((req, res) => {
  for (const handler of handlers) {
    if (!handler(req, res)) {
      break;
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}.`);
});
