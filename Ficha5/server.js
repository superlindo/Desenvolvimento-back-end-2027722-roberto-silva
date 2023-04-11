const express = require('express')
const app = express()
const port = 3000

//middleware que converte o body para json string
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

var fs = require('fs');

function readFile(path) {
  var content = fs.readFileSync(path);
  return JSON.parse(content);
}
var content = readFile('./persons.json')
console.log(content);

/*
app.get('/users', (req, res) => {
  res.send(content);
})
*/
app.post('/users', (req, res) => { 
  res.send(req.body.firstname);
})
