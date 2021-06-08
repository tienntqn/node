const express = require('express');
const app = express();

app.get('/' , (req , res)=>{

   res.send('<h1>Hello from simple server</h1>')

});

app.listen(3000,()=>{
    console.log("Server starting...");
});