var router = require('express').Router();
const work= require('../../controller/workOut');

router.route('/workout')
    .delete(work.deletWorkOut);


module.exports = router