const {
  validationPostCreate,
  validationUpdate,
} = require("@/middlewares/validationMiddleware");
const { authMiddleware } = require("@/middlewares/authMiddleware");
const { uploadMiddleware } = require("@/middlewares/uploadMiddleware");

module.exports = {
  validationPostCreate,
  validationUpdate,
  authMiddleware,
  uploadMiddleware,
};
