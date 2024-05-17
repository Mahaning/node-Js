const express= require ('express');

const app = express(); 

app.get('',(rq,res)=>{
    res.send('Hello this is homw page');
});

app.get('/about',(rq,res)=>{
    res.send('Hello this is About us page');
});

app.get('/Contact',(rq,res)=>{
    res.send('Hello this is Contact us page');
});

app.listen(5000);