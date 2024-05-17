const express= require ('express');
const path=require('path');
const app = express(); 

const publicpath=path.join(__dirname);

app.use(express.static(publicpath))

app.get('',(rq,res)=>{
    res.send('<h1>Hello this is homw page</h1>');
});

app.get('/about',(rq,res)=>{
    res.send('/index.html');
});

app.get('/Contact',(rq,res)=>{
    res.send('Hello this is Contact us page');
});

app.listen(5000);