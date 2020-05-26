var router = require('express').Router();
const saveWork = require('../../controller/saveWorkOut');

router.route('/saveWorkOut').post(saveWork.saveWorkOut);

module.exports = router;
