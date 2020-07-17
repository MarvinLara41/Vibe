const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/lightw8',
	JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
};
