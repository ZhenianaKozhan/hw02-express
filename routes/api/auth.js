const express = require("express");

const {
  register,
  login,
  getCurrent,
  logout,
  changeAvatar,
} = require("../../controllers/authController");

const { userSchema } = require("../../schemas/users");

const { validateBody } = require("../../decorators");

const { authenticate, upload } = require("../../middlewares");

const router = express.Router();

router.post("/register", validateBody(userSchema), register);

router.post("/login", validateBody(userSchema), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch("/avatars", upload.single("avatar"), authenticate, changeAvatar);

module.exports = router;
