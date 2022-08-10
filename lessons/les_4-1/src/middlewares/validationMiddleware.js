const Joi = require("joi");
const { ValidationError } = require("@/helpers/errors");

const validationPostCreate = async (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(4).max(20).required(),
    body: Joi.string().min(10).max(40).required(),
  });

  const validationResult = schema.validate(req.body);

  if (validationResult.error) {
    next(new ValidationError(validationResult.error));
  }
  next();
};

const validationUpdate = async (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().alphanum().min(4).max(20),
    body: Joi.string().alphanum().min(10).max(40),
  });

  const validationResult = schema.validate(req.body);

  if (validationResult.error) {
    next(new ValidationError(validationResult.error));
  }

  next();
};

module.exports = {
  validationPostCreate,
  validationUpdate,
};
