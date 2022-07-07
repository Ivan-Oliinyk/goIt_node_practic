const { User } = require("../db/userModel");
const { WrongParamsError, NotAuthorizedError } = require("../helpers/errors");
const bcrypt = require("bcrypt");

const registration = async (id) => {
  const { email, password } = req.body
  
  const user = new User({ email, password: bcrypt.hash(password, 5) })
  
  await user.save()

const login = async (id) => {};

  module.exports = {
    registration,
    login
  };