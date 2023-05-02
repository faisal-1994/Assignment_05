const fs =require('fs');
const http = require('http');
const server = http.createServer((req,res)=>{

    if(req.url=="/"){
        fs.readFile("./public/home.html", (error,data)=>{
            if(error){
            res.writeHead(404,{'content-type':'text/html'})
            res.write("404 Not Found");
            res.end();
        }

        else if(data){
            res.writeHead(200,{'content-type':'text/html'})
            res.write(data);
            res.end();
        }
        })
    }

    else if(req.url=="/about"){
        fs.readFile("./public/about.html", (error,data)=>{
            if(error){
            res.writeHead(404,{'content-type':'text/html'})
            res.write("404 Not Found");
            res.end();
        }

        else if(data){
            res.writeHead(200,{'content-type':'text/html'})
            res.write(data);
            res.end();
        }
        })
    }

    else if(req.url=="/contact"){
        fs.readFile("./public/contact.html", "utf8", (error,data)=>{
            if(error){
            res.writeHead(404,{'content-type':'text/html'})
            res.write("404 Not Found");
            res.end();
        }

        else if(data){
            res.writeHead(200,{'content-type':'text/html'})
            res.write(data);
            res.end();
        }
        })
      
    }
    else {
       
            
            res.writeHead(404,{'content-type':'text/html'})
            res.write("404 Not Found");
            res.end();
      
    }

    

})

server.listen(3000);
console.log('run');