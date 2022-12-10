var express = require('express');
var router = express.Router();

/* GET highlights listing. */
router.get('/', function(req, res, next) {
  res.render('highlights');
});

module.exports = router;