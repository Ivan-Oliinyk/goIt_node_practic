const router = require("express").Router();

const config = require("../../config");
const {
  getAllPosts,
  getPostById,
  removePostsById,
  createPost,
  updatePost,
} = require("../controllers/postsController");

const {
  ROUTERS: { POSTS, POST },
} = config;

router.get(POSTS, getAllPosts);
router.get(`${POST}/:id`, getPostById);
router.delete(`${POST}/:id`, removePostsById);
router.post(POST, createPost);
router.put(`${POST}/:id`, updatePost);

module.exports = router;
