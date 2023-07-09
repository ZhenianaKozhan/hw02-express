const Joi = require("joi");

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
});

const userEmailSchema = Joi.object({
  email: Joi.string().email().required(),
});

module.exports = {
  userSchema,
  userEmailSchema,
};
