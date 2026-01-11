const express = require('express');
const bodyParser=require('body-parser');
const path=require('path');
const root=require('../util/path');
const router= express.Router();
router.use('/z',(req,res,next)=>{
    res.sendFile(path.join(root,'views','ali.html'));
});
module.exports=router;