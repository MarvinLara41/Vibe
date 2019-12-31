var router = require('express').Router();
const work= require('../../controller/workOut');

router.route('/workout')
    .post(work.workOut)


module.exports = router