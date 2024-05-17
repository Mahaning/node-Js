const express= require ('express');
const path=require('path');
const app = express(); 

const publicpath=path.join(__dirname);

// app.use(express.static(publicpath))

app.get('',(rq,res)=>{
    res.sendFile(`${publicpath}/index.html`);
});

app.get('/about',(rq,res)=>{
    res.sendFile(`${publicpath}/index.html`);
});

app.get('/Contact',(rq,res)=>{
    res.send('Hello this is Contact us page');
});

app.get('*',(rq,res)=>{
    res.sendFile(`${publicpath}/404page.html`);
});

app.listen(5000);