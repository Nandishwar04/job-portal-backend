const express = require("express");
const router = express.Router();
const { submitApplication } = require("../controllers/applicationController");

router.post("/applications", submitApplication);

module.exports = router;
