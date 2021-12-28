const express = require('express');
const app = express();
app.use('/', (req,res,next)=>{
    console.log("works");
})
app.listen(3000);
console.log('http://localhost:3000');