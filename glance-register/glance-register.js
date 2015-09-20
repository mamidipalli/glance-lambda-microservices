console.log("glance register");
var Firebase = require('firebase');
var aws = require('aws-sdk');
var lambda = new aws.Lambda({
  region: 'us-west-2'
});
var retConErr;
var retConSucess;
exports.handler = function (event, context) {
  console.log("In Handler");
  var ref = new Firebase("https://on-demand.firebaseio.com");
  var usersRef = new Firebase('https://on-demand.firebaseio.com/users');
  ref.createUser({
    email: event.email,
    password: event.password
  }, function (error, userData) {
    if (error) {
      console.log("Error creating user:", error);
      context.fail("error", error);
    } else {
      usersRef.child(userData.uid).set({ email: event.email, name: event.name, phone: event.phone });
      console.log("Successfully created user account with uid:", userData.uid);
      context.succeed({"uid":userData.uid});
      /*lambda.invoke({
        FunctionName: 'glance-mail',
        Payload: '{"mailid":"'+event.email+'","uid":"'+userData.uid+'"}'
      }, function (error, data) {
        if (error) {
          console.log("Error sending email:", error);
          context.done('error', error);
        }
        else {
          console.log("Sent email successfuly!");
          context.succeed(data)
        }
      });*/
    }
  });
};