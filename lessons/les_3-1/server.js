const express = require("express");
const morgan = require("morgan");
const routers = require("./src/routers");
const { connectMongo } = require("./src/db/connection");
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

const start = async () => {
  await connectMongo();

  app.listen(PORT, () => {
    console.log(`Server run on port ${PORT} ...`);
  });
};

start();
