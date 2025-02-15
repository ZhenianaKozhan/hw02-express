const Joi = require("joi");

const messages = { "any.required": "missing required {{#label}} field" };

const contactAddSchema = Joi.object({
  name: Joi.string().required().messages(messages),
  email: Joi.string().email().required().messages(messages),
  phone: Joi.string().required().messages(messages),
  favorite: Joi.boolean(),
});

const contactUpdateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = { contactAddSchema, contactUpdateFavoriteSchema };
