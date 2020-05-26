const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//this file is for the creation of the user on the database.
const saveWorkOutSchema = new Schema({
	date: {
		type: String,
		default: '',
	},
	exercise: {
		type: String,
		default: '',
	},
	sets: {
		type: Number,
		default: '',
	},
	reps: {
		type: Number,
		default: '',
	},
	weight: {
		type: Number,
		default: '',
	},
});

const savedWorkOut = mongoose.model('SavedWorkOuts', saveWorkOutSchema);

module.exports = savedWorkOut;
