const {
  registrationService,
  loginService,
} = require("@/services/auth.service");

const registrationController = async (req, res) => {
  const { email, password } = req.body;

  await registrationService(email, password);

  res.json({ status: "success" });
};
const loginController = async (req, res) => {
  const { email, password } = req.body;
  const token = await loginService(email, password);

  res.json({ status: "success", token });
};

module.exports = { registrationController, loginController };
