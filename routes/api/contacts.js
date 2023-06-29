const express = require("express");

const {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
  updateFavorite,
} = require("../../controllers/contactsController");

const {
  contactAddSchema,
  contactUpdateFavoriteSchema,
} = require("../../schemas/contacts");

const {
  validateBody,
  isBodyInRequest,
  isBodyFavoriteInRequest,
} = require("../../decorators");

const { isValidId, authenticate } = require("../../middlewares");

const router = express.Router();

router.use(authenticate);

router.get("/", listContacts);

router.get("/:contactId", isValidId, getContactById);

router.post("/", validateBody(contactAddSchema), addContact);

router.delete("/:contactId", isValidId, removeContact);

router.put(
  "/:contactId",
  isValidId,
  isBodyInRequest,
  validateBody(contactAddSchema),
  updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  isBodyFavoriteInRequest,
  validateBody(contactUpdateFavoriteSchema),
  updateFavorite
);

module.exports = router;
