'use strict';

var http= require('http');
var util = require('./util');



var server = http.createServer(function (req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    var urlRequested = req.url;
    var requestArray = urlRequested.split('/');

    var requestArray = requestArray.slice(1);
    var moduleRequested = requestArray[0];

    switch (moduleRequested){

      case 'sum':
          requestArray.shift();
          console.log('The sum is: ' + util.add(requestArray));
          res.write('\n' + 'the sum is: ' + util.add(requestArray));
          res.end();
          break;


      case 'squared' :
          var number = requestArray[1];
          console.log(util.cubed);
          res.write('\n' + number + ' squared is ' + util.square(number));
          res.end();
          break;


      case 'cubed' :
          var number  = requestArray[1];
          console.log(util.cubed);
          res.write('\n' + number + ' cubed is ' + util.cubed(number));
          res.end();
          break;


      case 'gravatar' :
          var address = requestArray[1];
          console.log(util.gravatar(address));
          res.write( util.gravatar(address));
          res.end();


      case 'sentence' :
          var string = requestArray[1];
          res.write( '\n' + util.stringCounter(string) + '\n');
          res.end();

    // Show the HTML for the Google homepage.
    }
})







server.listen(3000);
