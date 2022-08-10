const {
  validationPostCreate,
  validationUpdate,
} = require("@/middlewares/validationMiddleware");
const { authMiddleware } = require("@/middlewares/authMiddleware");

module.exports = {
  validationPostCreate,
  validationUpdate,
  authMiddleware,
};
