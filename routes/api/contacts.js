const express = require("express");
const Joi = require("joi");

const contactService = require("../../models/contacts");

const { HttpError } = require("../../helpers");

const router = express.Router();

const contactAddSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "missing required {{#label}} field",
  }),
  email: Joi.string().required().messages({
    "any.required": "missing required {{#label}} field",
  }),
  phone: Joi.string().required().messages({
    "any.required": "missing required {{#label}} field",
  }),
});

router.get("/", async (req, res, next) => {
  try {
    const result = await contactService.listContacts();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactService.getContactById(contactId);
    if (!result) throw HttpError(404);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = contactAddSchema.validate(req.body);
    if (error) throw HttpError(400, error.message);
    const result = await contactService.addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactService.removeContact(contactId);
    if (!result) throw HttpError(404);
    res.json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
});

router.put("/:contactId", async (req, res, next) => {
  try {
    const { error } = contactAddSchema.validate(req.body);
    if (error) throw HttpError(400, "missing fields");
    const { contactId } = req.params;
    const result = await contactService.updateContact(contactId, req.body);
    if (!result) throw HttpError(404);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
