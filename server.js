const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require("./routes");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and vie
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/lightw8', {useNewUrlParser: true}, { useUnifiedTopology: true });

let db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'))
db.on('open', function callback () {
  console.log('connected')
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
