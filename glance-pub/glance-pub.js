console.log("*** Publish ***");

  var pubnub = require("pubnub")({
    ssl           : true,  // <- enable TLS Tunneling over TCP
    publish_key   : "",
    subscribe_key : ""	
	
    });
 
exports.handler = function(event, context) {
    
    console.log("In Handler:"+event.key1);
    var message = { "msg" : "Hello World" };
    pubnub.publish({ 
        channel   : 'my_channel',
        message   : message,
        callback  : function(e) {            
            console.log( "SUCCESS!", e );   
            context.succeed(e);        
            },
        error     : function(e) {
            console.log( "FAILED! RETRY PUBLISH!", e ); 
            }
    });
   
    
};

