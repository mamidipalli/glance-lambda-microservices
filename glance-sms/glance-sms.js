console.log("glance sms");

//require the Twilio module and create a REST client
var ACCOUNT_SID = <>;
var AUTH_TOKEN = <>;

var client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);

exports.handler = function(event, context) {
    
    console.log("In Handler"+event.key1);

//Send an SMS text message
client.messages.create({
		to:'',
		from: '',
		body: ''
	}, function(err, responseData) {
		 if (!err) {
			 	console.log(responseData.from);
				console.log(responseData.body); 
				context.succeed(responseData.body);
		 }
	}
);

	

};
