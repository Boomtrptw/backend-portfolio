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

app.use(cors())
app.use(express.json())

// --- ย้ายมาไว้ตรงนี้ ---
const swaggerUi = require("swagger-ui-express")
const swaggerSpec = require("./swagger/swagger")

app.use("/api/tech-stack", techRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Swagger route ต้องอยู่หลังการนิยาม Routes
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});