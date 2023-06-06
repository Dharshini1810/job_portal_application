const mongoose = require('mongoose');

const adminLoginSchema = new mongoose.Schema({
    adminId: {
        type: String,
        required: true,
        unique: true,
        minlength: 8
    },
    password: {
        type: String,
        required: true
    }
});

const adminLogin = mongoose.model('adminLogin', adminLoginSchema);

module.exports = adminLogin;

