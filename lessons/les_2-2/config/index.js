require("dotenv").config();

const config = {
  PORT: process.env.PORT || 8080 || 5000,

  ROUTERS: {
    API: "/api",
    POSTS: "/posts",
    POST: "/post",
  },
};

module.exports = config;
