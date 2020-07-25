const express = require('express');
const userModel = require('../models/userModel');
const router = express.Router();
const { getToken, isAuth } = require('../utils');

router.post('/signin', async (req, res) => {
	const signinUser = await userModel.findOne({
		email: req.body.email,
		password: req.body.password,
	});

	if (signinUser) {
		res.send({
			_id: signinUser.id,
			userName: signinUser.userName,
			email: signinUser.email,
			isCoach: signinUser.isCoach,
			token: getToken(signinUser),
		});
	} else {
		res.status(401).send({ msg: 'Invalid Email or Password' });
	}
});

router.post('/register', async (req, res) => {
	const user = new userModel({
		userName: req.body.userName,
		email: req.body.email,
		password: req.body.password,
	});

	const newUser = await user.save();
	if (newUser) {
		res.send({
			_id: newUser.id,
			userName: newUser.userName,
			email: newUser.email,
			isCoach: newUser.isCoach,
			token: getToken(newUser),
		});
	} else {
		res.status(401).send({ msg: 'Invalid User data.' });
	}
});

router.put('/:id', isAuth, async (req, res) => {
	const userId = req.params.id;

	const user = await userModel.findById(userId);

	if (user) {
		user.userName = req.body.userName || user.userName;
		user.email = req.body.email || user.email;
		user.password = req.body.password || user.password;
		const updatedUser = await user.save();
		res.send({
			_id: updatedUser.id,
			userName: updatedUser.userName,
			email: updatedUser.email,
			isCoach: updatedUser.isCoach,
			token: getToken(updatedUser),
		});
	} else {
		res.status(404).send({ msg: 'Error Updating.' });
	}
});

module.exports = router;
