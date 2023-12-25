const mongoose = require("mongoose");
const ProgramSchema = new mongoose.Schema({
  code: { type: String, required: [true, "Please provide a code"] },
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  category: {
    type: String,
    enum: ["Junior", "Senior"],
    required: [true, "Please provide a category"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Program", ProgramSchema);
