const express = require('express');
const app = express();

app.get('/', function(req, res){
	res.send("<h3>Testing notification slack channel deployment</h3>");
});

app.listen(8080,function(){
	console.log('app is running in port 8080');
})
