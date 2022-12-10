var express = require('express');
var router = express.Router();

/* GET standings listing. */
router.get('/', function(req, res, next) {
  res.render('standings');
});

module.exports = router;