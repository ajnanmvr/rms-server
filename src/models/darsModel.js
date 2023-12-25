const mongoose = require('mongoose');
const DarsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
    },
    code: {
        type: String,
        required: [true, 'Please provide a code'],
    },
    candidates: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Candidate',
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
    this.populate("candidates");
    next();
  });
module.exports = mongoose.model('Dars', DarsSchema);