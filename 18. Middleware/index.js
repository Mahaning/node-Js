const express= require ('express');

const app = express(); 
const reqFilter=(req,res,next)=>{
    // console.log('reqFilter');

    if(!req.query.age){
        res.send('Please eneter age');
    }
    else if(!req.query.age<18){
        res.send('can\'t eneter age');
    }
    else{
        next();//without next() we cant redirect other pages
    }
    }
   

app.use(reqFilter)

app.get('/',(rq,res)=>{
    res.send('Hello this is homw page');
});

app.get('/users',(rq,res)=>{
    res.send('Hello this is users page');
});

app.get('/Contact',(rq,res)=>{
    res.send('Hello this is Contact us page');
});

app.listen(5000);