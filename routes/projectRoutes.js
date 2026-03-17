const express = require("express")
const router = express.Router()

/**
 * @swagger
 * /projects:
 *   get:
 *     summary: Get all projects
 *     responses:
 *       200:
 *         description: List of projects
 */

router.get("/projects", (req, res) => {
  res.json([
    { id: 1, name: "Portfolio", tech: "Next.js + Node" },
    { id: 2, name: "Dashboard", tech: "React + Express" }
  ])
})

module.exports = router