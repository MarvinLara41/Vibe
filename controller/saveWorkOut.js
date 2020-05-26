const workOut = require('../models/savedWorkOutSchema');

module.exports = {
	saveWorkOut: function (req, res) {
		//Sign up post request can be checked with postman using the post "/api/account/signup"
		//everything under this post request is connected to user.js
		const { body } = req;
		const { date, exercise, sets, reps, weight } = body;

		//if error checks incase the user forgets to enter information
		if (!date) {
			return res.send({
				success: false,
				message: 'Error: must fill in date',
			});
		}
		if (!exercise) {
			return res.send({
				success: false,
				message: 'Error: must fill in exercise',
			});
		}
		if (!sets) {
			return res.send({
				success: false,
				message: 'Error: must fill in password',
			});
		}

		if (!reps) {
			return res.send({
				success: false,
				message: 'Error: must fill in password',
			});
		}

		if (!weight) {
			return res.send({
				success: false,
				message: 'Error: must fill in password',
			});
		}

		//save new user
		const work = new workOut();

		work.date = date;
		work.exercise = exercise;
		work.sets = sets;
		work.reps = reps;
		work.weight = weight;
		work.save((err, user) => {
			if (err) {
				return res.send({
					success: false,
					message: 'Server error',
				});
			}
			return res.send({
				success: true,
				message: 'WorkOut saved',
			});
		});
	},
};
