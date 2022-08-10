require("module-alias/register");
const express = require("express");
const logger = require("morgan");
const routers = require("./src/routers");
const { connectMongo } = require("./src/db/connection");
const config = require("./config");
const { errorHandler } = require("./src/helpers");
const swaggerUi = require("swagger-ui-express");
const { specs } = require("./src/swagger");

const {
  PORT,
  ROUTERS: { API, API_DOC },
} = config;

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(logger(formatsLogger));
app.use(API, routers);
app.use(API_DOC, swaggerUi.serve, swaggerUi.setup(specs));
app.use(errorHandler);

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
