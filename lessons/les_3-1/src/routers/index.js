const router = require("express").Router();
const postRouters = require("./postsRouters");
const config = require("../../config");

const {
  ROUTERS: { POSTS },
} = config;

router.use(POSTS, postRouters);

module.exports = router;
