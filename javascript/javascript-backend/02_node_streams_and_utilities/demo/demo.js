const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./index.html", {
  highWaterMark: 10000,
  encoding: "utf8",
});

const writeStream = fs.createWriteStream("./write1.txt", {
  encoding: "utf8",
});

const gzip = zlib.createGzip();

// readStream.on("data", (data) => {
//   console.log(data);
//   writeStream.write(data);
// });

// readStream.on("end", (data) => {
//   console.log("from end");
//   writeStream.end();
// });

// readStream.pipe(writeStream);
readStream.pipe(gzip).pipe(writeStream);
