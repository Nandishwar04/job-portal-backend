const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Job = require("./models/Job");

dotenv.config();

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

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Job.deleteMany();
    await Job.insertMany(jobs);
    console.log("Database seeded!");
    mongoose.disconnect();
  })
  .catch((err) => console.error(err));
