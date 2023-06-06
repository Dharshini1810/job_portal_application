const express = require('express'); 
const router = express.Router(); 
const app = express() 
const jobPostController = require('../controllers/adminController')

router.get('/admin/deljob/:id',(req,res)=>{
    const jobId = req.params.id;
    jobPostController.delJob(req,res,jobId);
});

module.exports=router;