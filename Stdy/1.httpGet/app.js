const express=require('express');//express third party module

const app=express(); //assign express

app.get('/',(req,res)=>{ //localhost:8080/ type is res is html file
    res.sendFile(__dirname+ "/"+"index.html");

});

app.get('/home',(req,res)=>{ //click to the submit button to a home page in the resullt
    res.send('<h1>Your name'+req.query['uname']+'</h1><br><h3>email is'+req.query['emaiid']+'</h3>');
})
app.listen(8080);