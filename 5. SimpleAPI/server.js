const { write } = require('fs');
const http=require('http');
const { json } = require('stream/consumers');
const data=require('./data.js')

http.createServer((req,res)=>{
    // res.write("<h1>Hello this my 1st server.</h1>");
    res.writeHead(201,{'Content-Type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();

}).listen(5000);