const {
  getPosts,
  getUserPosts,
  getPostsById,
  addPost,
  changePostById,
  deletePostById,
  getPostCount,
} = require("@/services/post.service");

const getAllPostsController = async (req, res) => {
  let {
    page = 1,
    limit = 3,
    sortField = "title",
    sortOrder = "asc",
  } = req.query;

  limit = parseInt(limit) > 30 ? 30 : parseInt(limit);
  page = parseInt(page) <= 0 ? 1 : parseInt(page);
  sortField = sortField.toLowerCase();
  sortOrder = sortOrder.toLowerCase();

  const count = await getPostCount();

  const posts = await getPosts({ page, limit, sortField, sortOrder });

  res.set({ "Posts-Length": count, "Post-Page": page, "Post-Limit": limit });
  res.status(200).json({ posts, count, page, limit });
};

const getAllUserPostsController = async (req, res) => {
  const { _id: userId } = req.user;
  let {
    page = 1,
    limit = 3,
    sortField = "title",
    sortOrder = "asc",
  } = req.query;

  limit = parseInt(limit) > 30 ? 30 : parseInt(limit);
  page = parseInt(page) <= 0 ? 1 : parseInt(page);
  sortField = sortField.toLowerCase();
  sortOrder = sortOrder.toLowerCase();

  const count = await getPostCount(userId);

  const posts = await getUserPosts({
    userId,
    page,
    limit,
    sortField,
    sortOrder,
  });

  res.status(200).json({ posts, count, page, limit });
};

const getPostByIdController = async (req, res) => {
  const { id } = req.params;
  const post = await getPostsById(id);

  res.status(200).json({ post, status: 200 });
};

const createPostController = async (req, res) => {
  const { title, body, price } = req.body;
  const { _id: userId } = req.user;

  const post = await addPost({ title, body, price }, userId);

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
