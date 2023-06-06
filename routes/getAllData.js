const express = require('express'); 
const app = express();
const router = express.Router(); 
const jobPostController = require('../controllers/adminController')

router.get('/admin/getalljobs',(req,res)=>{
    jobPostController.getAllData(req,res);
});
module.exports=router;