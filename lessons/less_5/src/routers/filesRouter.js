const router = require("express").Router();
const express = require("express");
const { asyncWrapper } = require("@/helpers/");
const { uploadController } = require("@/controllers/filesController");
const { uploadMiddleware } = require("@/middlewares");

const {
  ROUTERS: { UPLOAD_DIR_PATH },
} = require("@/config");

router.post(
  "/upload",
  uploadMiddleware.single("avatar"),
  asyncWrapper(uploadController)
);

router.use("/download", express.static(UPLOAD_DIR_PATH));

module.exports = router;
