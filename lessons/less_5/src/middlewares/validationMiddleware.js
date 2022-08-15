const Joi = require("joi");
const { ValidationError } = require("@/helpers/errors");

const validationPostCreate = async (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(4).max(30).required(),
    body: Joi.string().min(10).max(400).required(),
    price: Joi.number(),
  });

  const validationResult = schema.validate(req.body);

  if (validationResult.error) {
    next(new ValidationError(validationResult.error));
  }
  next();
};

const validationUpdate = async (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(4).max(30),
    body: Joi.string().min(10).max(400),
    price: Joi.number(),
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
