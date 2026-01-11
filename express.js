// 
const express = require('express');
const bodyParser=require('body-parser');

const path=require('path');

const Owais=express();

const adminAli=require('./routes/ali');
const adminAnsar=require('./routes/ansar');

Owais.use(express.static(path.join(__dirname,'public')));

Owais.use('/ali',adminAli);
Owais.use(adminAnsar);

Owais.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});
Owais.listen(3000);