const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      unique: true,
      required: true,
    },

    title: {
      type: String,
      required: true,
      unique: true,
      set: toTrim,
    },

    body: {
      type: String,
      required: true,
      set: toTrim,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

function toTrim(value) {
  return String(value).trim();
}

const Post = mongoose.model("Post", postSchema);

module.exports = {
  Post,
};
