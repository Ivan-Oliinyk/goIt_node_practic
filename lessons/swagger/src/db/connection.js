const mongoose = require("mongoose");
const config = require("../../config");

const { MONGODB_URL, DB_NAME } = config;

const connectMongo = async () => {
  return mongoose
    .connect(MONGODB_URL + "/" + DB_NAME, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to mongoDB");
    });
};

module.exports = { connectMongo };
