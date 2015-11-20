var crypto = require('crypto');
var http = require('http');


module.exports.billgenerator = function(req, res, next) 
{
	var phoneno = '7899861294';
	var command = "debit";
	var accessToken = "3u41p82uT1";
	var uniqueId = "RGXTZA";
	var comments = "RMA";
	var udf = "nothing";
	var hash; 
	var returnUrl = "http://http://olamoneytest.herokuapp.com/olamoney.html";
	var notificationUrl = "http://http://olamoneytest.herokuapp.com/olarequestnotify";
	var amount = "100.00";
	var currency = "INR";
	var couponCode = "optional";
	var salt = "n7QRr98Ui4";

	var z = (accessToken+'|'+uniqueId+'|'+comments+'|'+udf+'|'+returnUrl+'|'+notificationUrl+'|'+currency+'|'+amount+'|'+couponCode+'|'+salt);
	var sha = crypto.createHash('sha512').update(String(z));
	console.log(z);
	var result = sha.digest('hex');
	console.log(result);
	var base64form = new Buffer (JSON.stringify({"command": command, "accessToken": accessToken, "uniqueId": uniqueId, "comments": comments, "udf": udf, "returnUrl": returnUrl,"notificationUrl": notificationUrl, "amount":amount, "currency":currency, "couponCode":couponCode,"salt":salt})).toString("base64");
	console.log(base64form);
	var options = {
					  host: 'om.olacabs.com',
					  path: '/olamoney/webview/index.html?bill='+base64form+'&phone='+phoneno,
					  method: 'POST'
					};
/*
					http.request(options, function(res) {
					  console.log('STATUS: ' + res.statusCode);
					  console.log('HEADERS: ' + JSON.stringify(res.headers));
					  res.setEncoding('utf8');
					  res.on('data', function (chunk) {
					    console.log('BODY: ' + chunk);
					  });
					}).end();*/
}
