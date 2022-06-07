const router = require("express").Router();
const { validationPostCreate } = require("../middlewares/validationMiddleware");
const modalsMiddleware = require("../middlewares/modalsMiddleware");
const { asyncWrapper } = require("../helpers/");

const {
  getAllPosts,
  getPostById,
  removePostsById,
  createPost,
  updatePost,
} = require("../controllers/postsController");

router.use(modalsMiddleware);

router.get("/", asyncWrapper(getAllPosts));
router.get("/:id", asyncWrapper(getPostById));
router.delete(`/:id`, asyncWrapper(removePostsById));
router.post("/", validationPostCreate, asyncWrapper(createPost));
router.put(`/:id`, validationPostCreate, asyncWrapper(updatePost));

module.exports = router;
