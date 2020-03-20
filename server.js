//Dependencies
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const path = require('path');

//Set the port of the application- ready for Heroku
var port = process.env.PORT || 8080;

//Create express app
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use('/public', express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded( { extended: false } ));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

//Start server listening
app.listen(port, function() {
	console.log('App listening on PORT: ' + port);
});