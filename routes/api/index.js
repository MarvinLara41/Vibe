const router = require('express').Router();
const signIn = require('./signIn');
const signUp = require('./signUp');
const workout = require('./workout');
const weight = require('./currentWeight');
//routes
router.use('/signIn', signIn);
router.use('/signup', signUp);
router.use('/workout', workout);
router.use('/currentweight', weight);
module.exports = router;
