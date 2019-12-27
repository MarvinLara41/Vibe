const router = require("express").Router();
const signIn = require('./signIn');
const signUp =require('./signUp');

//routes
router.use("/signIn", signIn);
router.use("/signup", signUp);
module.exports = router;