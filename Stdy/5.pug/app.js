var express=require('express');
var app=express();

app.set('view engine','pug');
app.set('views','./views');

app.get('/',(req,res)=>{
    res.render("index",{
        Name : "selva",
        Age : "23",
        user : {name:'Vijay'} //include a index to if condition
    });
});
app.listen(8081);