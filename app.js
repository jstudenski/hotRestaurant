// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mysql = require("mysql");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var reservations = [
  {
    customerName: "John Doe",
    phoneNumber: "555-5555",
    customerEmail: "JDoe@gmail.com",
    customerID: "JDoe"
  }
];


// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

// get reservations object
app.get("/api/table", function(req, res) {
  console.log(reservations);
  return res.json(reservations);
});


// Create New Reservation - takes in JSON input
app.post("/api/new", function(req, res) {

  var newReservation = req.body;

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
});

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

