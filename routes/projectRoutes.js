const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         company:
 *           type: string
 *         status:
 *           type: string
 *         description:
 *           type: string
 *         tech:
 *           type: array
 *           items:
 *             type: string
 *         pdfUrl:
 *           type: string
 *         image:
 *           type: string
 *         order:
 *           type: number
 *         details:
 *           type: object
 *           properties:
 *             challenge:
 *               type: string
 *             solution:
 *               type: string
 *             impact:
 *               type: string
 *             specs:
 *               type: array
 *               items:
 *                 type: string
 *             stats:
 *               type: object
 *               properties:
 *                 acc:
 *                   type: string
 *                 latency:
 *                   type: string
 */

/**
 * @swagger
 * /api/projects/seed:
 *   post:
 *     summary: Seed initial projects data
 *     tags: [Projects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Project'
 *     responses:
 *       201:
 *         description: Projects seeded successfully
 *       500:
 *         description: Server error
 */
router.post("/seed", projectController.seedProjects);

/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Get all projects
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Project'
 */
router.get("/", projectController.getProjects);

module.exports = router;