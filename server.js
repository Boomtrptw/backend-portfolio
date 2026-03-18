require("dotenv").config();
const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")

const techRoutes = require("./routes/techRoutes");
const projectRoutes = require("./routes/projectRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express()
connectDB()

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json())

const swaggerUi = require("swagger-ui-express")
const swaggerSpec = require("./swagger/swagger") // ดึงจากไฟล์ข้างล่าง

app.use("/api/tech-stack", techRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});