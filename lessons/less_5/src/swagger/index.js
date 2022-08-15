const config = require("../../config");
const swaggerJsDoc = require("swagger-jsdoc");

const { HOST, PORT } = config;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hello World",
      version: "1.0.0",
      description: "Simple express library API",
    },
    servers: [
      {
        url: `${HOST}:${PORT}`,
      },
    ],
  },
  apis: ["./src/swagger/apis/*.js"],
};

const specs = swaggerJsDoc(options);

module.exports = { specs };
