const express = require("express");

const {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
} = require("../../controllers/contactsController");

const { contactAddSchema } = require("../../schemas/contacts");

const { validateBody, isBodyInRequest } = require("../../decorators");

const router = express.Router();

router.get("/", listContacts);

router.get("/:contactId", getContactById);

router.post("/", validateBody(contactAddSchema), addContact);

router.delete("/:contactId", removeContact);

router.put(
  "/:contactId",
  isBodyInRequest,
  validateBody(contactAddSchema),
  updateContact
);

module.exports = router;
