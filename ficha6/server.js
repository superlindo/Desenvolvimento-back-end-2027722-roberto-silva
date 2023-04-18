//npm init no terminal
//instalar dependençias
//npm install express

const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.arguments(express.json());
app.arguments(writelog);

fs.appendFileSync("log.txt","SERVER STARTED \n")

function writelog(req, res, next){
    var log = req.url + ", "+ req.method + ", " + new Date().toString() + "\n";
    fs.appendFileSync("log.txt",log);
}


// outra forma de fazer o app.get
//app.get('/', function(req,res){
//})


//http://localhost:3000 
app.get('/' , (req,res)=>{   
    var log = req.url + ", "+ req.method + ", " + new Date().toString() + "\n";
    fs.appendFileSync("log.txt",log)
    const body = "Hello World!";
    res.writeHead(200, {
        'content-Lenght': Buffer.byteLength(body),
        'content-Type':'text/plain'
    });
    res.end(body);
});


// http://localhost:3000/teste1
app.get('/teste1' , (req,res)=>{   
    const body = "<h1>This is a Heading</h1><p>This is a paragraph.</p>";
    res.writeHead(200, {
        'content-Lenght': Buffer.byteLength(body),
        'content-Type':'text/html'
    });
    res.end(body);
});

app.listen(port, ()=>{
    console.log("server is running")
})

// http://localhost:3000/teste2
app.get('/teste2' , (req,res)=>{   
    const body = fs.readFileSync("index.html");
    res.writeHead(200, {
        'content-Lenght': Buffer.byteLength(body),
        'content-Type':'text/html'
    });
    res.end(body);
});

// http://localhost:3000/html/name ou seja localhost:3000/html/roberto vai dizer welcome roberto
app.get('/html/:name' , (req,res)=>{ 
    var date= new Date()
    var name= req.params.name;  
    var body = fs.readFileSync("index.html" , "utf-8");
    body = body.replace("{name}",name)
    body = body.replace("{date}",date.toDateString())
    res.writeHead(200, {
        'content-Lenght': Buffer.byteLength(body),
        'content-Type':'text/html'
    });
    res.end(body);
});