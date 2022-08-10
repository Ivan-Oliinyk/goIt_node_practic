const { Post } = require("@/db/postModel");
const { WrongParamsError } = require("@/helpers/errors");

const getPosts = async () => {
  const posts = await Post.find();
  return posts;
};

const getUserPosts = async ({ userId }) => {
  const posts = await Post.find({ userId });
  return posts;
};

const getPostsById = async (id) => {
  const post = await Post.findById(id);

  if (!post) {
    throw new WrongParamsError(`Not found post with id ${id}`);
  }

  return post;
};

const addPost = async ({ title, body }, userId) => {
  const post = new Post({ title, body, userId });
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

module.exports = {
  getPosts,
  getUserPosts,
  getPostsById,
  addPost,
  changePostById,
  deletePostById,
};
