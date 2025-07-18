const express = require("express");
const router = express.Router();
const { getJobs, getJobById } = require("../controllers/jobController");

// GET /api/jobs/
router.get("/", getJobs);

// GET /api/jobs/:id
router.get("/:id", getJobById);

module.exports = router;
