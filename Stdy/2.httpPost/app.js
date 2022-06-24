const express=require('express');//express third party module

const app=express(); //assign express

const bodyparse=require('body-parser');
var urlcode=bodyparse.urlencoded({extended:false});

app.get('/',(req,res)=>{ //localhost:8080/ type is res is html file
    res.sendFile(__dirname+ "/"+"index.html");

});

app.post('/home',urlcode,(req,res)=>{ //click to the submit button to a home page in the resullt
    res.send('<h1>Your name'+req.body.uname+'</h1><br><h3>email is'+req.body.emaiid+'</h3>');//res.body is a hide the quey to display the page
})
app.listen(8080);