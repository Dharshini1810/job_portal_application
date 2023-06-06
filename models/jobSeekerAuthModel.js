const mongoose = require('mongoose');

const jobSeekerLoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const JobSeekerLogin = mongoose.model('JobSeekerLogin', jobSeekerLoginSchema);

module.exports = JobSeekerLogin;
