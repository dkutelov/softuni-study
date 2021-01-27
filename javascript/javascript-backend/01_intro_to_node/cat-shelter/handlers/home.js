const url = require("url");
const fs = require("fs");
const path = require("path");
const qs = require("querystring");

const catsFilePath = path.normalize(path.join(__dirname, "../data/cats.json"));
const fileName = path.normalize(
  path.join(__dirname, "../views/home/index.html")
);

function homeHandler(req, res) {
  const pathname = url.parse(req.url).pathname;

  if (pathname === "/" && req.method === "GET") {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        console.log(err);
        res.writeHead(404, {
          "Content-Type": "text/plain",
        });
        res.write("404 not found");
        res.end();
        return;
      }

      fs.readFile(catsFilePath, (err, cats) => {
        cats = JSON.parse(cats);
        let catsHTML = cats.map(
          (c) => `
          <li>
          <img
            src="${path.join("./content/images/" + c.image)}"
            alt="${c.name}"
          />
          <h3>${c.name}</h3>
          <p><span>Breed: </span>${c.breed}</p>
          <p>
            <span>Description: ${c.description}
          </p>
          <ul class="buttons">
            <li class="btn edit"><a href="/cats-edit/${
              c.id
            }">Change Info</a></li>
            <li class="btn delete"><a href="/cats-find-new-home/${
              c.id
            }">New Home</a></li>
          </ul>
        </li>
          `
        );

        let dataWithCats = data.toString().replace("{{cats}}", catsHTML);
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        res.write(dataWithCats);
        res.end();
      });
    });
  } else if (pathname === "/search" && req.method === "POST") {
    let body = "";
    req.on("data", function (data) {
      body += data;

      // Too much POST data, kill the connection!
      // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
      if (body.length > 1e6) req.connection.destroy();
    });

    req.on("end", function () {
      const textObj = qs.parse(body);

      fs.readFile(fileName, (err, data) => {
        if (err) {
          console.log(err);
          res.writeHead(404, {
            "Content-Type": "text/plain",
          });
          res.write("404 not found");
          res.end();
          return;
        }

        fs.readFile(catsFilePath, (err, cats) => {
          cats = JSON.parse(cats);
          let catsHTML = cats
            .filter((c) => c.name.includes(textObj.text))
            .map(
              (c) => `
            <li>
            <img
              src="${path.join("./content/images/" + c.image)}"
              alt="${c.name}"
            />
            <h3>${c.name}</h3>
            <p><span>Breed: </span>${c.breed}</p>
            <p>
              <span>Description: ${c.description}
            </p>
            <ul class="buttons">
              <li class="btn edit"><a href="/cats-edit/${
                c.id
              }">Change Info</a></li>
              <li class="btn delete"><a href="/cats-find-new-home/${
                c.id
              }">New Home</a></li>
            </ul>
          </li>
            `
            );

          let dataWithCats = data.toString().replace("{{cats}}", catsHTML);
          res.writeHead(200, {
            "Content-Type": "text/html",
          });
          res.write(dataWithCats);
          res.end();
        });
      });
    });
  } else {
    return true;
  }
}

module.exports = homeHandler;
