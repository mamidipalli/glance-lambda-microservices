console.log("glance signin");

var client = require('firebase');

exports.handler = function (event, context) {
  console.log("In Handler");
  
  var ref = new Firebase("https://on-demand.firebaseio.com");
  ref.authWithPassword({
    email: event.email,
    password: event.password
  }, function (error, authData) {
    if (error) {
      console.log("Login Failed! " + error);
      context.succeed("splash");
    } else {
      console.log("Authenticated successfully!");
			context.succeed("app.map");
    }
  });
};