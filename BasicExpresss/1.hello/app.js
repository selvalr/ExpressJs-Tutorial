const express = require('express') //third party module
const app = express()//app generate express object
const port = 3000 //port Number

app.get('/', (req, res) => { //localhost:3000/ to the result 
  res.send('Hello World!')  //print chrome browser
})

app.listen(port, () => { //listen to 3000 url sent 
  console.log(`Example app listening on port ${port}`) //console logging 
})