const Application = require("../models/Application");

const submitApplication = async (req, res) => {
  try {
    const { name, email, resume, jobId } = req.body;
    const application = new Application({ name, email, resume, jobId });
    await application.save();
    res.status(201).json({ message: "Application submitted" });
  } catch (error) {
    res.status(500).json({ message: "Submission failed", error });
  }
};

module.exports = { submitApplication };
