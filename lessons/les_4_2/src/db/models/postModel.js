const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      unique: true,
      required: true,
      ref: "User",
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

    price: {
      type: Number,
      required: true,
    },

    isVisible: {
      type: Boolean,
      required: true,
      default: true,
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
