var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path')
/* GET highlights listing. */
router.get('/', function(req, res, next) {
    let data = fs.readFileSync(path.resolve(__dirname, "../data/highlights.json"));
    res.render('highlights', { highlights: JSON.parse(data)});  
});

module.exports = router;