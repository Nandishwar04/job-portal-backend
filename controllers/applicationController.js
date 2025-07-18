const Application = require("../models/Application");

exports.submitApplication = async (req, res) => {
  const newApp = new Application(req.body);
  await newApp.save();
  res.status(201).json({ message: "Application submitted" });
};
