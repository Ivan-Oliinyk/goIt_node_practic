// Imports the Google Cloud client library
const { Storage } = require("@google-cloud/storage");
// const { log } = require("@/logger");

const storage = new Storage();
const bucketName = "goittest-2022";

const filePath = "./tmp/a379d4e0-7f6b-449c-bdf5-53beb7acb973.jpeg";
const destFileName = "a379d4e0-7f6b-449c-bdf5-53beb7acb973.jpeg";

const downloadFilePath = "a379d4e0-7f6b-449c-bdf5-53beb7acb973.jpeg";
const downloadFileName = "./tmp/downloader-image1.jpeg";

// upload
async function uploadBucket() {
  try {
    await storage.bucket(bucketName).upload(filePath, {
      destination: destFileName,
    });

    console.log(`${filePath} uploaded to ${bucketName}`);
  } catch (err) {
    console.log(err.message);
  }
}

// download
async function downloadBucket() {
  try {
    await storage
      .bucket(bucketName)
      .file(downloadFilePath)
      .download({ destination: downloadFileName });

    console.log(
      `gs://${bucketName}/${downloadFilePath} downloaded to ${destFileName}.`
    );
  } catch (err) {
    console.log(err.message);
  }
}

// uploadBucket();
downloadBucket();
