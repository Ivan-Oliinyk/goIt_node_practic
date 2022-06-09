const { Post } = require("../db/postModel");
const { WrongParamsError } = require("../helpers/errors");

const getPosts = async () => {
  const posts = await Post.find();
  return posts;
};

const getPostsById = async (id) => {
  const post = await Post.findById(id);

  if (!post) {
    throw new WrongParamsError(`Not found post with id ${id}`);
  }

  return post;
};

const addPost = async ({ title, body }) => {
  const post = new Post({ title, body });
  await post.save();
};

const changePostById = async (id, { title, body }) => {
  const post = await Post.findByIdAndUpdate(id, { $set: { title, body } });

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

module.exports = {
  getPosts,
  getPostsById,
  addPost,
  changePostById,
  deletePostById,
};
