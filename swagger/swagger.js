const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Portfolio API",
      version: "1.0.0",
      description: "API documentation for Portfolio backend"
    },
    servers: [
      {
        url: "https://boom-portfolio-backend.onrender.com",
        description: "Production Server (Render)",
      },
      {
        url: "http://localhost:5000",
        description: "Local Development Server",
      },
    ],
  },
  apis: [
    path.join(__dirname, "../routes/*.js"),
    path.join(__dirname, "../server.js")
  ]
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;