require("dotenv").config();

const config = {
  PORT: process.env.PORT || 8080 || 5000,
  MONGODB_URL: process.env.MONGODB_URL,
  HOST: process.env.HOST,
  DB_NAME: "goIt",

  ROUTERS: {
    API: "/api",
    POSTS: "/posts",
    AUTH: "/auth",
    API_DOC: "/api-docs",
  },
};

module.exports = config;
