const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  title: {
    type: String,
  },
  bio: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// проверяем перед сохранением если новый то сохраняем и хешируем пароль
userSchema.pre("save", async function () {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  // TODO: if user changed his password
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
