const express = require('express');
const bodyParser=require('body-parser');
const path=require('path');
const root=require('../util/path');
const router= express.Router();
router.use('/users',(req,res,next)=>{
    res.sendFile(path.join(root,'views','ansar.html'));
});
module.exports=router;