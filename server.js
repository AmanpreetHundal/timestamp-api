var express     = require('express');
var dateFormat  = require("dateformat");

var app = express();

app.get('/', function (req, res) {
  var result = {unix: null, natural: null};
  res.send(result);
  
});

app.get('/:date', function (req, res) {

  var reqDate = req.params.date;
  var unix = null;
  var natural = null;

  if(reqDate.includes(" "))
  {
    unix = new Date(reqDate).getTime() / 1000;
    natural = reqDate;
  }
  else
  {
    unix = reqDate;
    natural = dateFormat(reqDate*1000,"mmmm d, yyyy");
  }
  
  var result = {unix: unix, natural: natural};
  res.send(result);
  
});

app.listen(process.env.PORT, function () {
  console.log('App listening on port !'+process.env.PORT);
});