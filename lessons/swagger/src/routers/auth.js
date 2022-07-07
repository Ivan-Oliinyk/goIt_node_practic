const router = require("express").Router();
const { asyncWrapper } = require("../helpers/");
const {
  registrationController,
  loginController,
} = require("../controllers/authController");

router.post("/registration", asyncWrapper(registrationController));
router.post("/login", asyncWrapper(loginController));

module.exports = router;
