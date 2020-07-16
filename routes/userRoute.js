const express = require('express');
const User = require('../models/userModel');
const { getToken, isAuth } = require('../utils');
const router = express.Router();

router.post('/signin', async (req, res) => {
	const signinUser = await User.findOne({
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

module.exports = router;
