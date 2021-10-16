const express = require('express');
const app = express();

app.get('/', function(req, res){
	res.send("<h5>Welcome to home application 2</h5>");
});

app.listen(8080,function(){
	console.log('app is running in port 8080');
})
