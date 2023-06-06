const express = require('express'); 
const app = express();
const router = express.Router(); 
const jobPostController = require('../controllers/adminController')

router.post('/admin/createjob',(req,res)=>{
    var id=req.body.id;
    var title=req.body.title;
    var location=req.body.location;
    var type=req.body.type;
    var description=req.body.description;
    var experience=req.body.experience;
    var reqmnts=req.body.req;
    var skills=req.body.skills;
    var lastday=req.body.lastday;
    jobPostController.createJob(id,title,location,type,description,experience,reqmnts,skills,lastday,req,res);
});
module.exports=router;