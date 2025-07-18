const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Job = require("../models/Job");

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const seedJobs = [
  {
    title: "Frontend Developer",
    company: "Altibbe",
    location: "Remote",
    description: "React + TS frontend developer needed",
    type: "Remote"
  },
  {
    title: "Backend Developer",
    company: "TechFirm",
    location: "Bangalore",
    description: "Build REST APIs with Node.js and MongoDB",
    type: "Full-time"
  },
  {
    title: "Product Designer",
    company: "Hedamo",
    location: "Mumbai",
    description: "Create clean UI/UX",
    type: "Part-time"
  }
];

async function seed() {
  await Job.deleteMany();
  await Job.insertMany(seedJobs);
  console.log("Jobs seeded");
  mongoose.disconnect();
}

seed();
