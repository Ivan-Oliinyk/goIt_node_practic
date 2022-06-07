const Joi = require("joi");

const validationPostCreate = async (req, res, next) => {
  // next(new Error("valsdasda!!!!"));

  try {
    const schema = Joi.object({
      title: Joi.string().alphanum().min(4).max(20).required(),
      body: Joi.string().alphanum().min(10).max(40).required(),
    });

    const validationResult = schema.validate(req.body);

    if (validationResult.error) {
      return res.status(400).json({ message: validationResult.error.details });
    }
    next();
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  validationPostCreate,
};
