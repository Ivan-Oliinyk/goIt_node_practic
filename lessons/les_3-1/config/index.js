require("dotenv").config();

const config = {
  PORT: process.env.PORT || 8080 || 5000,
  MONGODB_URL: process.env.MONGODB_URL,
  DB_NAME: "goIt",

  ROUTERS: {
    API: "/api",
    POSTS: "/posts",
  },
};

module.exports = config;
