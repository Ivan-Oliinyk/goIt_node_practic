const router = require("express").Router();
const {
  validationPostCreate,
  validationUpdate,
  authMiddleware,
} = require("@/middlewares");
const { asyncWrapper } = require("@/helpers/");

const {
  getAllPostsController,
  getAllUserPostsController,
  getPostByIdController,
  removePostsByIdController,
  createPostController,
  updatePostController,
} = require("../controllers/postsController");

router.use(authMiddleware);

router.get("/", asyncWrapper(getAllPostsController));
router.get("/user-posts", asyncWrapper(getAllUserPostsController));
router.get("/:id", asyncWrapper(getPostByIdController));
router.delete(`/:id`, asyncWrapper(removePostsByIdController));
router.post("/", validationPostCreate, asyncWrapper(createPostController));
router.put(`/:id`, validationUpdate, asyncWrapper(updatePostController));

module.exports = router;
