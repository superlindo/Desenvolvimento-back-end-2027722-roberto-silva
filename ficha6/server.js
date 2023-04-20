//npm init no terminal se for a primeira vez 
//npm install express se for a primeira vez
//npm install


const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.json());
app.use(writelog);

fs.appendFileSync("log.txt","SERVER STARTED \n")

function writelog(req, res, next){
    var log = req.url + ", "+ req.method + ", " + new Date().toString() + "\n";
    fs.appendFileSync("log.txt",log);
    next();
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

// http://localhost:3000/log
app.get('/log',(req,res)=>{
    var log = fs.readFileSync("log.txt","utf-8");
    res.send(log);
});

// http://localhost:3000/log.txt
app.get('/log.txt',(req,res)=>{
    res.download('log.txt',(err)=>{
        if(err){
            res.status(404).send("File not found")
        }
    });
});


app.delete('/log.txt',(req,res)=>{
    fs.unlink('/log.txt',(err)=>{
        if(err != undefined){
            res.status(304).end("Unable to delete file");
        }
        else{
            res.send("File deleted!")
        }
    });
});

// express --view=pug myapp 
//cd myapp
//npm install