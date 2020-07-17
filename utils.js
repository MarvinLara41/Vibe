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
			expiresIn: '48h',
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
module.exports = { getToken, isAuth };
