var express = require('express');
//var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config/config'); 

var app = express();

//connect to mongoose
mongoose.connect(config.database);
var db = mongoose.connection;

app.use(bodyParser.json());
 
app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

app.use('/', require('./routes'));
 
// Auth Middleware - This will check if the token is valid
// Only the requests that start with /api/v1/* will be checked for the token.
// Any URL's that do not follow the below pattern should be avoided unless you 
// are sure that authentication is not needed

/*app.all('/api/v1/*', [require('./middlewares/validateRequest')]);
 
app.use('/', require('./routes'));*/
 
// If no route is matched by now, it must be a 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.send('hello');
  // res.status(404).end();
  // next(err);
});
 
// Start the server
app.set('port', process.env.PORT || 3000);
 
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});