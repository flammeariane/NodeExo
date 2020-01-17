const express = require('express')
const app = express();

// first route to send hello world 

app.get('/', function(request, respond){
    respond.send('Hello world');
});

app.listen(8080, function(){
    console.log ( ' run on port 8080')
})
