const express = require("express");
const router = express.Router();
const techController = require("../controllers/techController");

/**
 * @swagger
 * /api/tech-stack/seed:
 *   post:
 *     summary: Seed initial tech stack data
 *     tags: [TechStack]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *     responses:
 *       201:
 *         description: Data seeded successfully
 */
router.post("/seed", techController.seedTechStack);

/**
 * @swagger
 * /api/tech-stack:
 *   get:
 *     summary: Get all tech stack groups
 *     tags: [TechStack]
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", techController.getAllTechStack);

module.exports = router;