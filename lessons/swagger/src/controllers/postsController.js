const {
  getPosts,
  getPostsById,
  addPost,
  changePostById,
  deletePostById,
} = require("../services/post.service");

const getAllPostsController = async (req, res) => {
  const posts = await getPosts();
  res.status(200).json({ posts });
};

const getPostByIdController = async (req, res) => {
  const { id } = req.params;
  const post = await getPostsById(id);

  res.status(200).json({ post, status: 200 });
};

const createPostController = async (req, res) => {
  const { title, body } = req.body;
  const post = await addPost({ title, body });

  res.json({ status: 200, message: "Post was created!", data: post });
};

const updatePostController = async (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;

  await changePostById(id, { title, body });

  res.json({
    status: 200,
    message: `Post with id ${id} was updated!`,
  });
};

const removePostsByIdController = async (req, res) => {
  const { id } = req.params;

  await deletePostById(id);

  res.json({ status: 200, message: `Post with id:${id} was deleted` });
};

module.exports = {
  getAllPostsController,
  getPostByIdController,
  removePostsByIdController,
  createPostController,
  updatePostController,
};
