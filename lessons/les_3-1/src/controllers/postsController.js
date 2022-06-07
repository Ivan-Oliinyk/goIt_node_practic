const { v4: uuidv4 } = require("uuid");
const ObjectId = require("mongodb").ObjectId;

const getAllPosts = async (req, res) => {
  const posts = await req.dbs.Posts.find({}).toArray();
  res.status(200).json({ posts });
};

const getPostById = async (req, res) => {
  const { id } = req.params;

  const post = await req.db.Posts.findOne({ _id: ObjectId(id) });

  if (!post) {
    return res.status(400).json({ status: `Not found post with id ${id}` });
  }

  res.status(200).json({ post, status: 200 });
};

const removePostsById = async (req, res) => {
  await req.db.Posts.deleteOne({ _id: ObjectId(req.params.id) });
  res.json({ status: "success" });
};

const createPost = async (req, res) => {
  const { title, body } = req.body;
  await req.db.Posts.insertOne({ title, body });

  res.json({ status: "Post create !" });
};

const updatePost = async (req, res) => {
  const id = String(req.params.id);

  await req.db.Posts.updateOne(
    { _id: ObjectId(id) },
    { $set: { ...req.body } }
  );

  res.json({ status: "Success" });
};

module.exports = {
  getAllPosts,
  getPostById,
  removePostsById,
  createPost,
  updatePost,
};
