const mongoose = require('mongoose');

const signUpTemplate = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    studentNo: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    yearOfStudy: {
        type: String,
        required: true
    },
    placement: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: false
    },
    experience: {
        type: String,
        required: false
    },
    interests: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    age: {
        type: String,
        required: false
    },
    ethnicity: {
        type: String,
        required: false
    },
    nationality: {
        type: String,
        required: false
    },
    disability: {
        type: String,
        required: false
    },
    residency: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: true
    },
    numOfMentees: {
        type: String,
        required: false
    },
    matchingCriteria: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: false
    },
    trained: {
        type: Boolean,
        required: false
    },
    applicationStatus: {
        type: String,
        required: false
    },
    matchingCriteria: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('users', signUpTemplate);