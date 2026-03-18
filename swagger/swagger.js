const swaggerJsdoc = require("swagger-jsdoc")
const path = require("path"); // เพิ่ม path เข้ามาช่วย

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
        url: "http://localhost:5000"
      }
    ]
  },
  // ใช้ path.join เพื่อความแม่นยำ ไม่ว่าสคริปต์จะรันจากโฟลเดอร์ไหน
  apis: [
    path.join(__dirname, "../routes/*.js"),
    path.join(__dirname, "../server.js")
  ]
}

const swaggerSpec = swaggerJsdoc(options)
module.exports = swaggerSpec