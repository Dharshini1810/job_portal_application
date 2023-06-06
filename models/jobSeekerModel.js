const mongoose = require('mongoose');

const jobSeekerSchema = new mongoose.Schema({
    linkedInProfile: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const JobSeeker = mongoose.model('JobSeeker', jobSeekerSchema);

module.exports = JobSeeker;
