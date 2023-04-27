var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'ficha7'
});

connection.connect();

/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query("SELECT * FROM persons",(err,results,fields)=>{
   
      res.send(results);
  })
});

module.exports = router;
