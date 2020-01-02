var router = require('express').Router();
const work= require('../../controller/workOut');

router.route('/workout')
    .put(work.updateWorkOut)


module.exports = router