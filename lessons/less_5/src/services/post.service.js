const { Post } = require("../db/models");
const { WrongParamsError } = require("../helpers/errors");

const getPosts = async ({ page, limit, sortField, sortOrder }) => {
  const skip = limit * (page - 1);

  const posts = await Post.find()
    .skip(skip)
    .limit(limit)
    .select({ __v: 0 })
    .sort({ [sortField]: sortOrder === "desc" ? -1 : 1 });

  return posts;
};

const getUserPosts = async ({ userId, page, limit, sortField, sortOrder }) => {
  const skip = limit * (page - 1);

  const posts = await Post.find({ userId }, { __v: 0 })
    .skip(skip)
    .limit(limit)
    .select({ __v: 0 })
    .sort({ [sortField]: sortOrder === "desc" ? -1 : 1 });

  return posts;
};

const getPostsById = async (id) => {
  const post = await Post.findById(id, { __v: 0 });

  if (!post) {
    throw new WrongParamsError(`Not found post with id ${id}`);
  }

  return post;
};

const addPost = async ({ title, body, price }, userId) => {
  const post = new Post({ title, body, price, userId });
  await post.save();
};

const changePostById = async (id, { title, body }, userId) => {
  const post = await Post.findOneAndUpdate(
    { id, userId },
    { $set: { title, body } }
  );

  if (!post) {
    throw new WrongParamsError(`Post with id ${id} is not found!`);
  }
};

const deletePostById = async (id) => {
  const post = await Post.findByIdAndDelete(id);

  if (!post) {
    throw new WrongParamsError(`Not found post with id ${id}`);
  }
};

const getPostCount = async (userId = "") => {
  const searchParam = userId ? { userId } : {};

  const count = await Post.find(searchParam).count();

  return count;
};

module.exports = {
  getPosts,
  getUserPosts,
  getPostsById,
  addPost,
  changePostById,
  deletePostById,
  getPostCount,
};
