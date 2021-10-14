const express = require('express');
const app = express();

app.get('/', function(req, res){
	res.send("This is app2 - webhook by github notify to stack channel. ");
});

app.listen(8080,function(){
	console.log('app is running in port 8080');
})
