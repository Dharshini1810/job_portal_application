const mongoose = require('mongoose');
const jobPost = require('../models/jobPostModel');
const url = "mongodb+srv://dharshu1810:dharshu1810@cluster0.a5wbfkl.mongodb.net/job_portal?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your application or perform database operations
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

exports.createJob = async(id,title,location,type,description,experience,reqmnts,skills,lastday,req,res)=>{
    const newJobPost = new jobPost({
        jobId: id,
        title: title,
        location: location, 
        jobType: type,
        description: description,
        experience: experience, 
        requirements: reqmnts,
        skills: skills,
        lastDate: lastday
    }); 
    newJobPost.save().then(()=>{
        console.log("Job Post Added!");
    }).catch((err)=>{
        console.log(err);
    })
    res.render('./home',{
        alertmsg:'Post Added!' 
    });
}


exports.getAllData = async (req, res) => {    
    try {
      const jobId = await jobPost.find().select('jobId');
      const title = await jobPost.find().select('title');
      const location = await jobPost.find().select('location');
      var ids=[]; 
      var titles=[];
      var locations=[];
      var data=[];
      jobId.forEach(element => {
        ids.push(element.jobId);
      });
      title.forEach(element => {
        titles.push(element.title);
      });
      location.forEach(element => {
        locations.push(element.location);
      });
      for(i=0;i<ids.length;i++){
        data.push({id:ids[i], title: titles[i], location: locations[i]});
      }
      res.render('./alljobs',{
        data
      })
    } catch (err) {
      res.status(400).send('Error retrieving data from the database'+err);
    }
};

exports.getParticularIdData = async (req, res, jobId) => {
    try{
        const data = await jobPost.findOne({jobId:jobId});
        // console.log("value: "+data)
        if (!data) {
            return res.status(404).json({ message: 'Job not found' });
        }      
        // Return the job details as a JSON response
        res.json(data);
    }catch (error) {
        // console.log(error)
        res.status(500).json({ message: error });
    }
};
exports.delJob = async(req,res,jobId)=>{
  const status = await jobPost.deleteOne({jobId});
  console.log(status);
  try {
    const jobId = await jobPost.find().select('jobId');
    const title = await jobPost.find().select('title');
    const location = await jobPost.find().select('location');
    var ids=[]; 
    var titles=[];
    var locations=[];
    var data=[];
    jobId.forEach(element => {
      ids.push(element.jobId);
    });
    title.forEach(element => {
      titles.push(element.title);
    });
    location.forEach(element => {
      locations.push(element.location);
    });
    for(i=0;i<ids.length;i++){
      data.push({id:ids[i], title: titles[i], location: locations[i]});
    }
    res.render('./alljobs',{
      data
    })
  } catch (err) {
    res.status(400).send('Error retrieving data from the database'+err);
  }
};