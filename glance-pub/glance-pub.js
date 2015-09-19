console.log("*** Publish ***");

  var pubnub = require("pubnub")({
    ssl           : true,  // <- enable TLS Tunneling over TCP
    publish_key   : "pub-c-c27df9ed-a723-4fd3-b47d-0fad432bc885",
    subscribe_key : "sub-c-69bd7168-5383-11e5-8a9f-0619f8945a4f"	
	
    });
 
exports.handler = function(event, context) {
    
    console.log("In Handler:"+event.key1);
    var message = { "msg" : "Hello Vishnu" };
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

