const express = require("express");
const router = express.Router();
const { submitApplication } = require("../controllers/applicationController");

// POST /api/applications/
router.post("/", submitApplication);

module.exports = router;
