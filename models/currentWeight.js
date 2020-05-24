const mongoose = require('mongoose');

const CurrentWeightSchema = new mongoose.Schema({
	weightModel: {
		type: Number,
		default: '',
	},
});

module.exports = mongoose.model('CurrentWeight', CurrentWeightSchema);
