// server.js

// init project
var express = require('express');
var app = express();

//helper function
function ParseDateString( req_string ){
  if( req_string.match(/^[0-9]+$/) ) {
    return new Date( Number(req_string) * 1000.0 );
  }
  else if( req_string.match(/^[A-Z][a-z]+ [0-9]{2}, [0-9]{4}$/) ){
    return new Date( req_string );
  }
  else {
    return null;
  }
}

// http://expressjs.com/en/starter/basic-routing.html
app.get("/:string", function (request, response) {
  var req_string = request.params.string;
  console.log(req_string);
  
  var date = ParseDateString(req_string);
  
  if( date ){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var unix_time = date.getTime() / 1000.0;
    var date_string = date.toLocaleString('en-US', options);
    response.end(JSON.stringify(
      { "unix" : unix_time,
        "natural" : date_string } 
    ) );
  }
  else {
    response.end(JSON.stringify(
      { "unix" : null,
        "natural" : null } 
    ) );
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
