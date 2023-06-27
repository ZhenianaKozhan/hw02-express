const express = require("express");

const { register, login } = require("../../controllers/authController");

const { userSchema } = require("../../schemas/users");

const { validateBody } = require("../../decorators");

const router = express.Router();

router.post("/register", validateBody(userSchema), register);

router.post("/login", validateBody(userSchema), login);

module.exports = router;
