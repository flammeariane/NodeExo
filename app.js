const express = require('express')
const app = express();
require ('dotenv').config();


// first route to send hello world 

app.get('/', function(request, respond){
    respond.send('Hello world !');
});

app.listen(process.env.PORT, function(){
    console.log ( 'serve run on 8080')
})
