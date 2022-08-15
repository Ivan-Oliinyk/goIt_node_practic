require("dotenv").config();

const config = {
  PORT: process.env.PORT || 8080 || 5000,
  MONGODB_URL: process.env.MONGODB_URL,
  HOST: process.env.HOST,
  DB_NAME: "goIt",
  JWT_SECRET: process.env.JWT_SECRET,
  UPLOAD_DIR_NAME: "tmp",

  ROUTERS: {
    API: "/api",
    POSTS: "/posts",
    AUTH: "/auth",
    API_DOC: "/api-docs",
    FILES: "/files",
    UPLOAD_DIR_PATH: "./tmp",
  },
};

module.exports = config;
