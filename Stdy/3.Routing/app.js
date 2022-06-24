var express=require('express');

var app=express();

var router=require('./routing');//local module

app.use('/',router);//using to routing


app.listen(8081);