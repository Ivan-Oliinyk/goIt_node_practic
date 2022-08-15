const {
  validationPostCreate,
  validationUpdate,
} = require("@/middlewares/validationMiddleware");
const { authMiddleware } = require("./authMiddleware");
const { uploadMiddleware } = require("./uploadMiddleware");

module.exports = {
  validationPostCreate,
  validationUpdate,
  authMiddleware,
  uploadMiddleware,
};

// GOOGLE_APPLICATION_CREDENTIALS="/home/ivan/Desktop/NODE_GoIT/lessons/less_5/gcp.json" node google-store-demo.js
