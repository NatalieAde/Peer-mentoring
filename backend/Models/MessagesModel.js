const mongoose = require('mongoose');

const MessagesSchema = new mongoose.Schema({
    chatID: {
        type: String,
        required: false
    },
    from: {
        type: String,
        required: true
    },
    to: {
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