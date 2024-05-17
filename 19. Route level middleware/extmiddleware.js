module.exports= reqFilter=(req,res,next)=>{
    // console.log('reqFilter');

    if(!req.query.age){
        res.send('Please eneter age');
    }
    else if(req.query.age<18){
        res.send('can\'t eneter age');
    }
    else{
        next();//without next() we cant redirect other pages
    }
    }