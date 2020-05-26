const router = require('express').Router();
const signIn = require('./signIn');
const signUp = require('./signUp');
const workout = require('./workout');
const weight = require('./currentWeight');
const saveWork = require('./saveWorkOut');
const getWork = require('./getSavedWorkOut');
//routes
router.use('/signIn', signIn);
router.use('/signup', signUp);
router.use('/workout', workout);
router.use('/currentweight', weight);
router.use('/saveWorkOut', saveWork);
router.use('/getWorkOut', getWork);

module.exports = router;
