const express = require('express'); 
const app = express();
const router = express.Router();
const path = require('path'); 
const bodyParser = require('body-parser'); 
const {engine} = require('express-handlebars'); 
const createJob = require('./routes/createJob');
const getJob = require('./routes/getAllData');
const delJob = require('./routes/delJob');
const getParticularJob = require('./routes/particularId');
app.use(bodyParser.urlencoded())
app.engine('hbs',engine({extname:'.hbs',defaultLayout:'adminheader'}));
app.set('view engine','hbs');

router.get('/admin/createjob',(req,res)=>{
    res.render('home',{
        docTitle:'Create Job',
        alertmsg:'' 
    });
})
app.use(express.static('public'))
app.use(router); 

app.use('/',createJob);
app.use('/',getJob);
app.use('/',getParticularJob);
app.use('/',delJob);
app.listen(4000,()=>{
    console.log("server running!");
})