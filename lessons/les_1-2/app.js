require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const fs = require("fs").promises;
const path = require("path");

const PORT = 8081;
const app = express();
app.use(express.json());

//parse from form
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.use(morgan("tiny"));
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.originalUrl}, ${new Date().toISOString()}`);
//   next();
// });

app.get("/json", async (req, res) => {
  try {
    const data = await fs.readFile(path.resolve("./package.json"), "utf-8");
    // console.log(data);
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
  }
});

app.get("/home", (req, res) => {
  res.status(200).json({ javascript: { name: "Petro", age: 30 } });
});

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome page</h1>");
});

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error with a server launch", err);
  }

  console.log(`server run on port ${PORT} ...`);
});
