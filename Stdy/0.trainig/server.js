const express=require('express');

const app=express();

app.set('view engine', 'pug')
app.set('views','./views')

app.get('/',(req,res)=>{
    console.log('hai selva');
    //res.send("welcome selva");
    //res.status(200).json('hello');
});

app.get('/peop', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })

app.listen(8080);