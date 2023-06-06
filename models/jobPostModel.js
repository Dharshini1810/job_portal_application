const mongoose = require('mongoose'); 
const jobPostSchema = new mongoose.Schema({
    jobId:{
        type:String,
        required:true,
        minlength: 8
    }, 
    title:{
        type:String,
        required:true
    }, 
    location:{
        type:String,
        required:true
    }, 
    jobType:{
        type:String,
        enum: ['Full-Time', 'Internship', 'Apprenticeship'], 
        required:true
    },
    description:{
        type:String,
        required:true
    }, 
    experience:{
        type:String,
        enum: ['0-1 years', '1-2 years', '2-3 years', '3-4 years', '4-5 years','5 years and above', 'No experience required'],
        required:true
    },
    requirements:{
        type:[String],
        required:true
    }, 
    skills:{
        type:[String],
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now 
    }, 
    lastDate:{
        type:Date,
        required:true
    }
});

module.exports = mongoose.model('JobPost',jobPostSchema);