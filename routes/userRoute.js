const express = require('express');
const userModel = require('../models/userModel');
const { getToken, isAuth } = require('../utils');
const router = express.Router();

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

module.exports = router;
