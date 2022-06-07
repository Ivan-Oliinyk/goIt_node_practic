const express = require("express");
const morgan = require("morgan");
const routers = require("./routers");
const config = require("./config");

const {
  PORT,
  ROUTERS: { API },
} = config;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(morgan("tiny"));

app.use(API, routers);

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT} ...`);
});
