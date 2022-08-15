const {
  ROUTERS: { UPLOAD_DIR_PATH },
} = require("@/config");
const { uploadBucket } = require("../googleStore/googleStore");

const uploadController = async (req, res) => {
  const fileName = req.body.fullName;
  await uploadBucket(UPLOAD_DIR_PATH, fileName);

  res.json({ status: "success" });
};

module.exports = { uploadController };
