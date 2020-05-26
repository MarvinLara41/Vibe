const workOut = require('../models/savedWorkOutSchema');

module.exports = {
	getWorkOut: function (req, res) {
		//everything under this post request is connected to userSession.js
		const { body } = req;
		const { date, exercise, sets, reps, weight } = body;

		savedworkout.aggregate(
			[{ $match: {} }, { $group: { _id: '$savedworkouts' } }],
			(err, show) => {
				if (err) {
					return res.send({
						success: false,
						message: 'server error',
					});
				}
				return res.send({
					message: 'Success!',
					value: JSON.stringify(show),
				});
				console.log(JSON.stringify(show)); //if using postman the return will be rendered in terminal
			}
		);
	},
};
