const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const {
  ROUTERS: { UPLOAD_DIR_PATH },
} = require("@/config");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(`${UPLOAD_DIR_PATH}`));
  },

  filename: (req, file, cb) => {
    const [, extension] = file.originalname.split(".");
    const fullName = `${uuidv4()}.${extension}`;

    req.body.fullName = fullName;

    cb(null, fullName);
  },
});

const uploadMiddleware = multer({ storage });

module.exports = { uploadMiddleware };
