var express = require('express');
var app = express();
var router = require('router');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'));

//var routes = require('./routes');
var route_billgenerator = require('./routes/billgenerator');

app.get('/', function (req, res) {
     res.sendFile(__dirname + '/public/index12.html');
});


app.post('/billgenerator', route_billgenerator.billgenerator);

var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});