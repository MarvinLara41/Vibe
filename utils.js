const jwt = require('jsonwebtoken');
const config = require('./config');

const getToken = (user) => {
	return jwt.sign(
		{
			_id: user._id,
			userName: user.userName,
			email: user.email,
			isCoach: user.isCoach,
		},
		config.JWT_SECRET,
		{
			expiresIn: '2h',
		}
	);
};

const isAuth = (req, res, next) => {
	const token = req.headers.authorization;
	if (token) {
		const onlyToken = token.slice(7, token.length);

		jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
			if (err) {
				return res.status(401).send({
					msg: 'Invalid Token',
				});
			}

			req.user = decode;
			next();
			return;
		});
	} else {
		return res.status(401).send({
			msg: 'Token is not supplied',
		});
	}
};

const isCoach = (req, res, next) => {
	if (req.user && req.user.isCoach) {
		return next();
	}
	return res.status(401).send({ message: 'Admin Token is not valid.' });
};
module.exports = { getToken, isAuth, isCoach };
