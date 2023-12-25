const mongoose = require("mongoose");
const CandidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  chestNo: {
    type: String,
    required: [true, "Please provide a chestNo"],
  },
  category: {
    type: String,
    enum: ["Junior", "Senior"],
    required: [true, "Please provide a category"],
  },
  program: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Program",
  },
  avatar: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
dataSchema.pre("find", function (next) {
  this.populate("program");
  next();
});
module.exports = mongoose.model("Candidate", CandidateSchema);
