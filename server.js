// Dependencies 
const express = require("express");
const bodyParser = require("body-parser");
require("express-handlebars"); 

// Express setup 
const app = express (); 
const PORT = process.env.PORT || 8080; 

// Require models
const db = require("./models"); 

// Data parsing set up 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static directory
app.use(express.static("./public/"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Require routes
require("./controller/bookController.js")(app);

// Sync models then fire Express app
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});