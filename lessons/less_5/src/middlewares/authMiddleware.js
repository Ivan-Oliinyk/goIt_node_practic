const jwt = require("jsonwebtoken");
const { NotAuthorizedError } = require("../helpers/errors");
const { JWT_SECRET } = require("../../config/");

const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) {
    next(new NotAuthorizedError("Please, provide a  Bearer token"));
  }

  const [tokenType, token] = req.headers.authorization
    ? req.headers.authorization.split(" ")
    : [null, null];

  const user = jwt.decode(token, JWT_SECRET);

  if (!user || tokenType !== "Bearer") {
    next(new NotAuthorizedError("Invalid Bearer token"));
  }

  req.token = token;
  req.user = user; //получаем данные из токена ({userId, createdAt}, userId необходимо для дальнейшего использования в контроллерах)

  next();
};

module.exports = { authMiddleware };
