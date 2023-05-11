var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'ficha7'
});

/**
 * @openapi
 * /:
 *   get:
 *     description:  GET users listing.
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/', function(req, res, next) {
  //connection.query("SELECT * FROM persons",(err,results,fields)=>{
  //    res.send(results);
  //})
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


/* POST users (Add details of new person) fazer no postman apenas , nao da no browser*/
router.post('/', function(req, res, next) {
  var person=req.body;
  connection.query("INSERT INTO persons SET ? ", [person],(err,results,fields)=>{
      res.send(results);
  })
});


/* POST users (Add details of new person) fazer no postman apenas , nao da no browser*/
// PUT /persons/:id - Atualizar detalhes de uma pessoa
router.put('/:id', function(req, res, next) {
  var person = req.body;
  var id = req.params.id;
  connection.query("UPDATE persons SET ? WHERE ID = ?", [person, id], (err, results, fields) => {
    if (err) {
      console.log(err);
      res.sendStatus(500).end("Error while performing"); //.end é para poderes adicionar a mensagem ao erro
    } else if (results.affectedRows == 0) {
      res.sendStatus(404).end("Id not found");
    } else {
      res.send(results);
    }
  });
});



module.exports = router;
