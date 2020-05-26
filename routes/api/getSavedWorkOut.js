var router = require('express').Router();
const work = require('../../controller/getSavedWorkOut');

router.route('/getWorkOut').get(work.getWorkOut);

module.exports = router;
