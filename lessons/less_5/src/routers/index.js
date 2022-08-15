const router = require("express").Router();
const postRouters = require("./postsRouters");
const authRouters = require("./authRouters");
const filesRouters = require("./filesRouter");
const config = require("@/config");

const {
  ROUTERS: { POSTS, AUTH, FILES },
} = config;

router.use(POSTS, postRouters);
router.use(AUTH, authRouters);
router.use(FILES, filesRouters);

module.exports = router;
