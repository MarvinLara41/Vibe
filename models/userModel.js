const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	userName: { type: String, required: true },
	email: { type: String, required: true, uniqure: true, dropDups: true },
	password: { type: String, required: true },
	isCoach: { type: Boolean, required: true, default: false },
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
