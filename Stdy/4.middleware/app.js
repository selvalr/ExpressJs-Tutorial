let express=require('express'); //express js framwork
let app=express(); //app to the asign value
let alert=require('alert'); //alertbox npm package

/*
//ApplicationMiddleware
//middleware is a req and res to a running 
app.use((req,res,next)=>{ //Application middleware ,next is a  function  of next time to executed middleware
    alert("Welcome Selva");//first to executed alertbox in middleware
    console.log("middleware  to executed",req.method,"Method and url page is running",req.url);//terminal first to executed middleware
    next();//next time to the anyMiddleware in foucusing
});

//GET
app.get('/',(req,res,next)=>{  //second execute
    console.log('first page');
    res.send('welcome to the selva...!');
    next();
});
app.get('/selva',(req,res,next)=>{ 
    console.log("hello selva how are u");
    res.send('byeeee');
    next();
});

app.use((req,res,next)=>{ //third execude
    alert("its okk");
    console.log("good bye second middleware");
    next();
});

*/

/*
//Router level Middleware
//nexed path using ex:home/contact/phone

let router=express.Router();

router.use((req,res,next)=>{
alert("main") ;
console.log('welcome');   
next();
});

app.get('/',(req,res,next)=>{
    console.log('main');
    res.send("main page");
    next();

});


app.get('/home',(req,res,next)=>{
    console.log('home page');
    res.send('home');
    next();
});
router.get('/about',(req,res,next)=>{
    console.log('about us');
    res.send('ABOUT US');
    next();
});
router.get('/contact',(req,res,next)=>{
    console.log('Contact');
    res.send('COntact');
    next();
});
router.get('/exit',(req,res,next)=>{
    console.log('exit');
    res.send('exited');
    next();
});
app.use('/home',router);// localhost:8080/home/contact (or) aboout (or) exit

*//*


// Error Handling
app.get('*', function(req, res){
    //Create an error and pass it to the next function
    var err = new Error("Something went wrong");
    next(err);
 });

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
 });
app.listen(8080);//port

*/