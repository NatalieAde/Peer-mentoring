const mongoose = require('mongoose');

const MatchesSchema = new mongoose.Schema({
    mentor: {
        type: String,
        required: true
    },
    mentorName: {
        type: String,
        required: true
    },
    mentee: {
        type: [String],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Matches', MatchesSchema);