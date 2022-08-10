const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("@/db/userModel");
const { WrongParamsError, NotAuthorizedError } = require("@/helpers/errors");
const { JWT_SECRET } = require("@/config/");

const registrationService = async (email, password) => {
  const user = new User({
    email,
    password,
  });

  await user.save();
};

const loginService = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new NotAuthorizedError(`No user with email:${email} found!`);
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new WrongParamsError("Wrong password!");
  }

  const token = jwt.sign(
    {
      _id: user.id,
      createdAt: user.createdAt,
    },
    JWT_SECRET
  );

  return token;
};

module.exports = {
  registrationService,
  loginService,
};
