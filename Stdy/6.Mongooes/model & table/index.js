var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_db');

var personSchema = mongoose.Schema({
   name: String,
   age: Number,
   nationality: String
});

var Person = mongoose.model("Person", personSchema);

app.get('/people', function(req, res){
  res.render('person')
   });


  

   

app.listen(3000);