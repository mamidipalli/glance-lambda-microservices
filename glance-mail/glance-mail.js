
var Mailgun = require('mailgun').Mailgun;
var fs = require('fs');

var mg = new Mailgun('key-b0cdeda21aa520f31e4f569067fc4b2e');
var htmlMsg = fs.readFileSync('./glance-mail/account-activation.html', 'utf8');

exports.handler = function (event, context) {

  var toEmail = event.mailid; // 'Vishnu584@gmail.com';  // 
  console.log('To Email::' + toEmail);
  var uidValue = event.uid; // "abc345"; //
 
 
         
  mg.sendRaw('postmaster@mail.glance.co.in',
    [toEmail],
    'From: "Glance Support" <support@glance.co.in>' +
    '\nTo: ' + toEmail +
    '\nContent-Type: text/html; charset=utf-8 ' +
    '\nX-Mailgun-Variables: {"uid":"' + uidValue + '"}' +
    '\nSubject: Welcome To Glance !!!' +
    '\nrawBody: ' + htmlMsg,


    function (err) {
      if (err) {
        console.log('Oh noes: ' + err);
        context.fail('Something Went Wrong');
      }
      else {
        console.log('Success');
        context.succeed('Success');
      }
    });

}


