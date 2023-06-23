const ctrlWrapper = require("./ctrlWrapper");
const validateBody = require("./validateBody");
const {isBodyInRequest, isBodyFavoriteInRequest} = require("./isBodyInRequest");

module.exports = {
  ctrlWrapper,
  validateBody,
  isBodyInRequest,
  isBodyFavoriteInRequest
};
