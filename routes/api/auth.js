const express = require("express");

const {
  register,
  login,
  getCurrent,
  logout,
} = require("../../controllers/authController");

const { userSchema } = require("../../schemas/users");

const { validateBody } = require("../../decorators");

const { authenticate } = require("../../middlewares");

const router = express.Router();

router.post("/register", validateBody(userSchema), register);

router.post("/login", validateBody(userSchema), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

module.exports = router;
