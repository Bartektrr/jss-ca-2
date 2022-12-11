var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path')

/* GET standings listing. */
router.get('/', function(req, res, next) {
  let data = fs.readFileSync(path.resolve(__dirname, "../data/standings.json"));
  const sortedData = JSON.parse(data).sort((x,y) => {return x.position - y.position});
  res.render('standings', { standings: sortedData});  
});

module.exports = router;