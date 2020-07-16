const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5010;
const routes = require('./routes');
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
} else {
	app.use(express.static('client/public'));
}

// Add routes, both API and vie
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost:27017/lightw8',
	{ useNewUrlParser: true },
	console.log('Connected to DB')
);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.on('open', function callback() {
	console.log('connected to DB');
});

// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
