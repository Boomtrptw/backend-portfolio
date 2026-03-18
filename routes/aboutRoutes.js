const express = require("express");
const router = express.Router();
const aboutController = require("../controllers/aboutController");

/**
 * @swagger
 * /api/about/profile:
 *   get:
 *     summary: Get profile info
 *     tags: [About]
 *     responses:
 *       200:
 *         description: Success
 *   post:
 *     summary: Update or Create profile info
 *     tags: [About]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Profile updated
 */
router.get("/profile", aboutController.getProfile);
router.post("/profile", aboutController.updateProfile);

/**
 * @swagger
 * /api/about/experiences:
 *   get:
 *     summary: Get all experiences
 *     tags: [About]
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/experiences", aboutController.getExperiences);

/**
 * @swagger
 * /api/about/experiences/seed:
 *   post:
 *     summary: Seed experiences data
 *     tags: [About]
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
 *         description: Experiences seeded
 */
router.post("/experiences/seed", aboutController.seedExperiences);

module.exports = router;