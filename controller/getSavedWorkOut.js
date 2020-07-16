const workOut = require('../models/savedWorkOutSchema');

module.exports = {
	getWorkOut: function (gymDay, done) {
		// const { body } = req;
		// const { date, exercise, sets, reps, weight } = body;

		workOut.findOne(
			{
				date: gymDay,
			},
			function (err, workOutFound) {
				if (err) return console.log(err);
				done(null, workOutFound);
			}
		);
	},
};
