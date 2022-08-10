const {
  getPosts,
  getUserPosts,
  getPostsById,
  addPost,
  changePostById,
  deletePostById,
} = require("@/services/post.service");

const getAllPostsController = async (req, res) => {
  const posts = await getPosts();
  res.status(200).json({ posts });
};

const getAllUserPostsController = async (req, res) => {
  const { _id: userId } = req.user;
  const posts = await getUserPosts({ userId });

  res.status(200).json({ posts });
};

const getPostByIdController = async (req, res) => {
  const { id } = req.params;
  const post = await getPostsById(id);

  res.status(200).json({ post, status: 200 });
};

const createPostController = async (req, res) => {
  const { title, body } = req.body;
  const { _id: userId } = req.user;

  const post = await addPost({ title, body }, userId);

  res.json({ status: 200, message: "Post was created!", data: post });
};

const updatePostController = async (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;
  const { _id: userId } = req.user;

  await changePostById(id, { title, body }, userId);

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
  getAllUserPostsController,
  getPostByIdController,
  removePostsByIdController,
  createPostController,
  updatePostController,
};
