const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const config = require('./config');
const PORT = process.env.PORT || 5010;
const userRoute = require('./routes/userRoute');
const bodyParser = require('body-parser');
const workoutRoute = require('./routes/workoutRoute');

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
} else {
	app.use(express.static('client/public'));
}

// Add routes, both API and view

// Connect to the Mongo DB
const MONGODB_URI = config.MONGODB_URI;

mongoose
	.connect(MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.catch((error) => console.log(error.reason));

app.use('/api/users', userRoute);
app.use('/api/workout', workoutRoute);

// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
