const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");

/**
 * @swagger
 * /api/dashboard:
 *   get:
 *     summary: Get all dashboard overview data
 *     tags: [Dashboard]
 */
router.get("/", dashboardController.getDashboardData);

module.exports = router;