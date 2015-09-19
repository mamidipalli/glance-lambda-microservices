console.log("glance sms");

//require the Twilio module and create a REST client
var ACCOUNT_SID = 'ACfa353e58be331d25c2fefe8af0b22c5e';
var AUTH_TOKEN = '140603ec06ceabab6e870010f7404bfb';

var client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);

exports.handler = function(event, context) {
    
    console.log("In Handler"+event.key1);

//Send an SMS text message
client.messages.create({
		to:'+919491024470',
		from: '+16572185415',
		body: 'Hello Vishnu...'
	}, function(err, responseData) {
		 if (!err) {
			 	console.log(responseData.from);
				console.log(responseData.body); 
				context.succeed(responseData.body);
		 }
	}
);

	

};