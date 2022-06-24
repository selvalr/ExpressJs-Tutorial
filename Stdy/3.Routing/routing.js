
var  express=require('express');


var router=express.Router();
router.get('/',(req,res)=>{//loclahost:8080
    res.sendFile(__dirname+"/"+"index.html"); //localhost:8080/
});
router.get('/youtube',(req,res)=>{ //localhost:8080/youtube
    res.redirect("https://www.youtube.com/vjtechnowizard"); 
});
router.get('/twitter',(req,res)=>{
    res.redirect("https://www.twitter.com/selva_lr");//localhost:8080/twitter
});

router.get('/facebook',(req,res)=>{
    res.redirect("https://www.facebook.com/selva_lr");//localhost:8080/facebook
})
module.exports=router;
