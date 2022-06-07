require("dotenv").config();
const http = require("http");
const fs = require("fs").promises;
const path = require("path");

const PORT = process.env.PORT;
console.log(process.argv);

const requestHandler = async (req, res) => {
  const manifest = await fs.readFile(path.resolve("./package.json"), "utf-8");
  res.writeHead(200, { "Content-type": "text/json" });
  res.end(manifest);
};

const server = http.createServer(requestHandler);

server.listen(PORT, (err) => {
  if (err) {
    console.error("Error at server launch", err);
  }

  console.log(`Server start on port ${PORT}`);
});
