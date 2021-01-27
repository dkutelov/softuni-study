const url = require("url");
const fs = require("fs");
const path = require("path");
const qs = require("querystring");
const formidable = require("formidable");
const breeds = require("../data/breads.json");
const cats = require("../data/cats.json");

const catsFilePath = path.normalize(path.join(__dirname, "../data/cats.json"));

function catsHandler(req, res) {
  const pathname = url.parse(req.url).pathname;

  if (pathname === "/cats/add-cat" && req.method === "GET") {
    const pathAddCatHTML = path.normalize(
      path.join(__dirname, "../views/addCat.html")
    );

    const srcCats = fs.createReadStream(pathAddCatHTML);
    srcCats.on("data", (data) => {
      let catBreedPlaceholder = breeds.map(
        (b) => `<option value="${b}">${b}</option>`
      );
      let modifiedData = data
        .toString()
        .replace("{{catBreeds}}", catBreedPlaceholder);
      res.write(modifiedData);
    });
    srcCats.on("end", () => res.end());
    srcCats.on("error", (err) => {
      console.log(err);
    });
  } else if (pathname === "/cats/add-breed" && req.method === "GET") {
    const pathAddBreedHTML = path.normalize(
      path.join(__dirname, "../views/addBreed.html")
    );

    const srcBreed = fs.createReadStream(pathAddBreedHTML);
    srcBreed.on("data", (data) => {
      res.write(data);
    });
    srcBreed.on("end", () => res.end());
    srcBreed.on("error", (err) => {
      console.log(err);
    });
  } else if (pathname === "/cats/add-cat" && req.method === "POST") {
    let form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) throw err;

      var oldPath = files.upload.path;
      var newPath = path.normalize(
        path.join(__dirname, "../content/images") + "/" + files.upload.name
      );

      fs.rename(oldPath, newPath, (err) => {
        if (err) throw err;
        console.log("File was uploaded successfully");
      });

      fs.readFile(catsFilePath, (err, data) => {
        if (err) {
          throw err;
        }

        let allCats = JSON.parse(data);
        allCats.push({
          id: allCats.length + 1,
          ...fields,
          image: files.upload.name,
        });
        let allCatsJson = JSON.stringify(allCats);

        fs.writeFile(catsFilePath, allCatsJson, "utf-8", () => {
          console.log("New cat saved!");
          res.writeHead(301, { location: "/" });
          res.end();
        });
      });
    });
  } else if (pathname === "/cats/add-breed" && req.method === "POST") {
    let breedData = "";
    const breedsFilePath = path.normalize(
      path.join(__dirname, "../data/breads.json")
    );
    req.on("data", (data) => {
      breedData += data;
    });

    req.on("end", () => {
      const breedsBody = qs.parse(breedData);

      fs.readFile(breedsFilePath, (err, data) => {
        if (err) {
          throw err;
        }

        let breeds = JSON.parse(data);
        breeds.push(breedsBody.breed);
        let breedsJson = JSON.stringify(breeds);

        fs.writeFile(breedsFilePath, breedsJson, "utf-8", () =>
          console.log("New breed saved!")
        );
      });

      res.writeHead(301, { location: "/" });
      res.end();
    });
  } else if (pathname.includes("/cats-edit") && req.method === "GET") {
    const fileNameEditCats = path.normalize(
      path.join(__dirname, "../views/editCat.html")
    );

    const catId = getCatId(pathname);
    const currentCat = cats.find((c) => c.id === catId);

    const srcEditCats = fs.createReadStream(fileNameEditCats);
    srcEditCats.on("data", (data) => {
      let catBreedPlaceholder = breeds.map(
        (b) => `<option value="${b}">${b}</option>`
      );
      let modifiedEditData = data
        .toString()
        .replace("{{catId}}", catId)
        .replace("{{name}}", currentCat.name)
        .replace("{{description}}", currentCat.description)
        .replace("{{catBreeds}}", catBreedPlaceholder);

      res.write(modifiedEditData);
      srcEditCats.on("end", () => res.end());
      srcEditCats.on("error", (err) => {
        console.log(err);
      });
    });
  } else if (pathname.includes("/cats-find-new-home") && req.method === "GET") {
    const fileNameShelterCat = path.normalize(
      path.join(__dirname, "../views/catShelter.html")
    );

    const catId = getCatId(pathname);
    const currentCat = cats.find((c) => c.id === catId);

    const srcEditCats = fs.createReadStream(fileNameShelterCat);
    srcEditCats.on("data", (data) => {
      let catBreedPlaceholder = breeds.map(
        (b) => `<option value="${b}">${b}</option>`
      );
      let modifiedShelterData = data
        .toString()
        .replace("{{catId}}", catId)
        .replace("{{name}}", currentCat.name)
        .replace("{{description}}", currentCat.description)
        .replace("{{catBreed}}", currentCat.breed)
        .replace("{{catBreed}}", currentCat.breed)
        .replace("{{catBreeds}}", catBreedPlaceholder);

      res.write(modifiedShelterData);
      srcEditCats.on("end", () => res.end());
      srcEditCats.on("error", (err) => {
        console.log(err);
      });
    });
  } else if (pathname.includes("/cats-edit") && req.method === "POST") {
    const catId = getCatId(pathname);
    let editForm = new formidable.IncomingForm();

    editForm.parse(req, (err, fields, files) => {
      if (err) throw err;

      if (files.upload.size > 0) {
        var oldPath = files.upload.path;
        var newPath = path.normalize(
          path.join(__dirname, "../content/images") + "/" + files.upload.name
        );
        fs.rename(oldPath, newPath, (err) => {
          if (err) throw err;
          console.log("File was uploaded successfully");
        });
      }

      fs.readFile(catsFilePath, (err, data) => {
        if (err) {
          throw err;
        }

        let allCats = JSON.parse(data);

        const modifiedCats = allCats.map((c) => {
          if (c.id == catId) {
            return {
              id: c.id,
              ...fields,
              image: files.upload.size > 0 ? files.upload.name : c.image,
            };
          }
          return c;
        });

        let allCatsJson = JSON.stringify(modifiedCats);

        fs.writeFile(catsFilePath, allCatsJson, "utf-8", () => {
          console.log("Updated cat saved!");
          res.writeHead(301, { location: "/" });
          res.end();
        });
      });
    });
  } else if (
    pathname.includes("/cats-find-new-home") &&
    req.method === "POST"
  ) {
    const catId = getCatId(pathname);
    fs.readFile(catsFilePath, (err, data) => {
      if (err) throw err;

      const allCats = JSON.parse(data);
      let filteredCats = allCats.filter((c) => c.id !== catId);
      filteredCats = JSON.stringify(filteredCats);

      fs.writeFile(catsFilePath, filteredCats, "utf8", () => {
        console.log("Cats saved!");
        res.writeHead(301, { location: "/" });
        res.end();
      });
    });
  } else {
    return true;
  }
}

function getCatId(p) {
  const pathArray = p.split("/");
  const catId = pathArray.slice(-1)[0];
  return Number(catId);
}

module.exports = catsHandler;
