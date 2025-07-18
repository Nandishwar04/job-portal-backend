const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  resume: String,
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
  },
});

module.exports = mongoose.model("Application", applicationSchema);
