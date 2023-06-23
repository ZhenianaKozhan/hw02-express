const { HttpError } = require("../helpers");

const isBodyInRequest = (req, res, next) => {
  if (!Object.keys(req.body).length) {
    throw HttpError(400, "missing fields");
  } else {
    next();
  }
};

const isBodyFavoriteInRequest = (req, res, next) => {
  if (!Object.keys(req.body).length) {
    throw HttpError(400, "missing field favorite");
  } else {
    next();
  }
};

module.exports = { isBodyInRequest, isBodyFavoriteInRequest };
