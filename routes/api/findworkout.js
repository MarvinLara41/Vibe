var router = require('express').Router();
const work= require('../../controller/workOut');

router.route('/workout')
    .get(work.findWorkOut)


module.exports = router