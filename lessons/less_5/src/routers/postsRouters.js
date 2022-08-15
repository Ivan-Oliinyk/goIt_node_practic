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

router.get("/", asyncWrapper(getAllPostsController));

router.get(
  "/user-posts",
  authMiddleware,
  asyncWrapper(getAllUserPostsController)
);

router.get("/:id", asyncWrapper(getPostByIdController));

router.delete(`/:id`, authMiddleware, asyncWrapper(removePostsByIdController));

router.post(
  "/",
  authMiddleware,
  validationPostCreate,
  asyncWrapper(createPostController)
);

router.put(
  `/:id`,
  authMiddleware,
  validationUpdate,
  asyncWrapper(updatePostController)
);

module.exports = router;
