const mongoose = require('mongoose');

const MessagesSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
},  {
      timestamps: {
        createdAt: true,
        updatedAt: false
      }
});

module.exports = mongoose.model('Messages', MessagesSchema);