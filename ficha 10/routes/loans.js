var express = require('express');
var loansControler = require('../controlles/loasnControlles')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource from Loans');
});





module.exports = router;
