const router = require("express").Router();
const postRouters = require("./postsRouters");

router.use("/", postRouters);

module.exports = router;
