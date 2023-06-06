const express = require('express'); 
const app = express();
const router = express.Router(); 
const jobPostController = require('../controllers/adminController')

router.get('/admin/getalljobs/:id',(req,res)=>{
    const jobId = req.params.id;
    console.log(jobId)
    jobPostController.getParticularIdData(req,res,jobId);
});
module.exports=router;