// Imports the Google Cloud client library
const { Storage } = require("@google-cloud/storage");
const { log } = require("@/logger");
const { GOOGLE_BUCKET_NAME } = require("@/config");

const storage = new Storage();
const bucketName = GOOGLE_BUCKET_NAME;

const filePath = "./tmp/a379d4e0-7f6b-449c-bdf5-53beb7acb973.jpeg";
const destFileName = "a379d4e0-7f6b-449c-bdf5-53beb7acb973.jpeg";

const downloadFilePath = "a379d4e0-7f6b-449c-bdf5-53beb7acb973.jpeg";
const downloadFileName = "./tmp/downloader-image1.jpeg";

// upload
async function uploadBucket(path, fileName) {
  const filePath = `${path}/${fileName}`;

  try {
    await storage.bucket(bucketName).upload(filePath, {
      destination: fileName,
    });

    log.info(`${filePath} uploaded to ${bucketName}`);
  } catch (err) {
    log.error(err.message);
  }
}

// download
async function downloadBucket() {
  try {
    await storage
      .bucket(bucketName)
      .file(downloadFilePath)
      .download({ destination: downloadFileName });

    log.info(
      `gs://${bucketName}/${downloadFilePath} downloaded to ${destFileName}.`
    );
  } catch (err) {
    log.error(err.message);
  }
}

module.exports = {
  uploadBucket,
  downloadBucket,
};
