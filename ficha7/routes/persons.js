var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'ficha7'
});

connection.connect();

/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query("SELECT * FROM persons",(err,results,fields)=>{
   
      res.send(results);
  })
});


/* GET users ID listing. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  connection.query('SELECT * FROM persons WHERE idpersons = ?', id,(err,results,fields)=>{   
      res.send(results);
  })
});

/* DELETE users */
router.delete('/:id', function(req, res, next) {
  var id = req.params.id;
  connection.query('DELETE FROM persons WHERE idpersons = ?', id,(err,results,fields)=>{   
      res.send(results);
  })
});

/* GET users AGE & LASTNAME listing. */
router.get('/:age/:lastname', function(req, res, next) {
  connection.query('SELECT * FROM persons WHERE age = ? and lastname = ?', [req.params.age,req.params.lastname],(err,results,fields)=>{   
      res.send(results);
  })
});


/* POST users (Add details of new person) */
router.get('/', function(req, res, next) {
  var person=req.body;
  connection.query("INSERT INTO persons SET = ", [person],(err,results,fields)=>{
      res.send(results);
  })
});


module.exports = router;
