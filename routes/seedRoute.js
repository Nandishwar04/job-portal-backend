// routes/seedRoute.js
const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.get("/", async (req, res) => {
  try {
    const jobs = [
      {
        title: "Frontend Developer",
        company: "Altibbe Inc",
        location: "Remote",
        description: "Work on modern UIs using React.",
        type: "Full-time",
      },
      {
        title: "Backend Engineer",
        company: "Hedamo",
        location: "India",
        description: "Develop APIs with Node and MongoDB.",
        type: "Part-time",
      },
    ];

    await Job.deleteMany();
    await Job.insertMany(jobs);

    res.send("✅ Jobs seeded successfully!");
  } catch (err) {
    res.status(500).send("❌ Error seeding jobs: " + err.message);
  }
});

module.exports = router;
