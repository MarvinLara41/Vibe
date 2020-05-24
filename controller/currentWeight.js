const currentWeightModel = require('../models/currentWeight');

module.exports = {
	currentWeight: function (req, res) {
		const { body } = req;
		const { weightModel } = body;

		//save new workout
		const weight = new currentWeightModel();
		weight.weightModel = weightModel;

		weight.save((err, work) => {
			if (err) {
				return res.send({
					success: false,
					message: 'Server error',
				});
			}
			return res.send({
				success: true,
				message: 'Current weight saved',
			});
			console.log(work);
		});
	},
};
