const express = require('express');
const workoutModel = require('../models/workoutModel');
const { getToken, isAuth } = require('../utils');
const router = express.Router();

router.post('/', isAuth, async (req, res) => {
	const workout = new workoutModel({
		exercise: req.body.exercise,
		reps: req.body.reps,
		sets: req.body.sets,
		weight: req.body.weight,
		time: req.body.time,
		date: req.body.date,
	});

	const newWorkOut = await workout.save();
	if (newWorkOut) {
		return res.status(201).send({
			message: 'Workout saved.',
			data: newWorkOut,
		});
	}

	return res.status(500).send({ message: 'Error in saving workout.' });
});

router.get('/mine', isAuth, async (req, res) => {
	const workouts = await workoutModel.find({ user: req.user._id });
	res.send(workouts);
});

module.exports = router;
