const router = require("express").Router();
const {
  validationPostCreate,
  validationUpdate,
} = require("../middlewares/validationMiddleware");
const { asyncWrapper } = require("../helpers/");

const {
  getAllPostsController,
  getPostByIdController,
  removePostsByIdController,
  createPostController,
  updatePostController,
} = require("../controllers/postsController");

router.get("/", asyncWrapper(getAllPostsController));
router.get("/:id", asyncWrapper(getPostByIdController));
router.delete(`/:id`, asyncWrapper(removePostsByIdController));
router.post("/", validationPostCreate, asyncWrapper(createPostController));
router.put(`/:id`, validationUpdate, asyncWrapper(updatePostController));

module.exports = router;
