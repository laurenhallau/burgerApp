//Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

//Create express app
var app = express();

//Set the port of the application- ready for Heroku
var PORT = process.env.PORT || 8080;

//Static directory for css/js/images
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Importing routes ang giving the server access
const routes = require("./controllers/burgers_controller");

app.use(routes);

//Start the server listening
app.listen(PORT, function() {
    console.log("Listening on " + PORT);
});
