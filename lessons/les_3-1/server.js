const express = require("express");
const logger = require("morgan");
const routers = require("./src/routers");
const { connectMongo } = require("./src/db/connection");
const config = require("./config");

const {
  PORT,
  ROUTERS: { API },
} = config;

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(logger(formatsLogger));
app.use(API, routers);

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

const start = async () => {
  try {
    await connectMongo();

    app.listen(PORT, () => {
      console.log(`Server run on port ${PORT} ...`);
    });
  } catch (err) {
    console.error(err.message);
  }
};

start();
