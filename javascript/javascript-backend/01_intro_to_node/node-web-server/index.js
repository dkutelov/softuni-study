const http = require("http");
const PORT = 5000;
const url = require("url");
const querystring = require("querystring");

function requestHandler(req, res) {
  let reqUrl = url.parse(req.url);
  console.log(reqUrl.pathname);

  let params = querystring.parse(reqUrl.query);
  console.log(params);

  switch (req.method) {
    case "GET":
      res.write("Hello World!");
      if (reqUrl.pathname === "/humans") {
        res.writeHead(200, {
          "Content-type": "text/plain",
        });
        res.write("Hello Humans!");
      } else if (reqUrl.pathname === "/alians") {
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        res.write("<h1>Hello Alians!</h1>");
      } else {
        res.write("What you are?");
      }
      break;

    default:
      res.write("No handler for this request!");
      break;
  }

  res.end();
}

const app = http.createServer(requestHandler);
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}!`);
});
