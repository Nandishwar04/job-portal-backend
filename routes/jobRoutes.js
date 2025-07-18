const express = require("express");
const router = express.Router();
const { getJobs, getJobById } = require("../controllers/jobController");

router.get("/jobs", getJobs);
router.get("/jobs/:id", getJobById);

module.exports = router;
