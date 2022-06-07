const { MongoClient } = require("mongodb");
const config = require("../../config");
const Collections = require("./collections");

const { MONGODB_URL, DB_NAME } = config;

const connectMongo = async () => {
  const client = new MongoClient(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db(DB_NAME);

  Collections.Posts = db.collection("posts");

  console.log("Connected to mongodb");
};

module.exports = { connectMongo };
