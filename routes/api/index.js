const router = require("express").Router();
const signIn = require('./signIn');
const signUp =require('./signUp');
const workout = require('./workout')

//routes
router.use("/signIn", signIn);
router.use("/signup", signUp);
router.use("/workout", workout);
module.exports = router;