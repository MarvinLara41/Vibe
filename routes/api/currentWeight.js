var router = require('express').Router();
const weight = require('../../controller/currentWeight');

router.route('/currentweight').post(weight.currentWeight);
module.exports = router;
