const router = require("express").Router();
const postRouters = require("./postsRouters");
const authRouters = require("./authRouters");
const config = require("@/config");

const {
  ROUTERS: { POSTS, AUTH },
} = config;

router.use(POSTS, postRouters);
router.use(AUTH, authRouters);

module.exports = router;
