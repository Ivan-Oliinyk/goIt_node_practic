require("module-alias/register");
const express = require("express");
const logger = require("morgan");
const routers = require("./src/routers");
const { connectMongo } = require("./src/db/connection");
const config = require("./config");
const { errorHandler } = require("./src/helpers");
const swaggerUi = require("swagger-ui-express");
const { specs } = require("./src/swagger");
const { log } = require("@/logger");

const {
  PORT,
  UPLOAD_DIR_NAME,
  ROUTERS: { API, API_DOC },
} = config;

if (process.env.NODE_ENV === "development") {
  log.info("Run developer mode");
}

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(logger(formatsLogger));
app.use(API, routers);
app.use(API_DOC, swaggerUi.serve, swaggerUi.setup(specs));
app.use(errorHandler);
app.use(express.static(UPLOAD_DIR_NAME));

const start = async () => {
  try {
    await connectMongo();

    app.listen(PORT, () => {
      log.http(`Server run on port ${PORT}`);
    });
  } catch (err) {
    log.error(err.message);
  }
};

start();
