const express=require("express");


const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/employe",
{
    useNewUrlParser:true
})
.then(()=>{
    const app=express();


app.get('/',(req,res)=>{
    res.send("welcome");
});
app.listen(8080);
}).catch(()=>{
console.log("connection failed");
})