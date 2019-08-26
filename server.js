// http://localhost:3000

const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();

var PORT = process.env.PORT || 3000;

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: "application/*+json"}));
app.use(bodyParser.raw({type: "application/vnd.custom-type"}));
app.use(bodyParser.text({type: "text/html"}));

app.use("/", express.static("./"));


var errorPg = path.join(__dirname, './404.html'); //this is your error page

// app.use(function(req, res) {
//   res.status(404).end(errorPg);
// });

// app.use(function(req, res, next){
//   res.status(404).render('404', {title: "Sorry, page not found"});
// });

app.get("*", function(req,res){
  res.sendFile(errorPg);
});

app.listen(PORT, function () {
  console.log("Portfolio is listening on PORT: " + PORT);
});