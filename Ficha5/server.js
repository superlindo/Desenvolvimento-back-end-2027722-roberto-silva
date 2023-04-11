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

app.post('/users', (req, res) => { 
  res.send(req.body.firstname);
})

app.get('/users', (req, res) => {
  res.send(content);
})

app.post('/users', (req, res)=>{
  var person = req.body;
  var size= Object.keys(content).length;
  var id = size+1;
  person.id=id;
  content["person" + id]= person;
  res.send("ID: " + id);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/',(req, res) => {
  res.send('Hello World!')
})

app.get('/users',(req, res) => {
  res.send(content)
})

app.get('/users/:id',(req, res) => {
  var id=req.params.id;
  var person=content["person" + id];
  res.send(person);
})

app.put('/users',(req, res) => {
  res.send(content)
})
