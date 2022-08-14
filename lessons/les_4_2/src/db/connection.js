const mongoose = require("mongoose");
const config = require("@/config");
const { log } = require("@/logger");

const { MONGODB_URL, DB_NAME } = config;

const connectMongo = async () => {
  return mongoose
    .connect(MONGODB_URL + "/" + DB_NAME, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      log.info("Connected to mongoDB");
    });
};

module.exports = { connectMongo };
