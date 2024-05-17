const express= require ('express');

const app = express(); 

// Multil level 

// // const reqFilter=(req,res,next)=>{
// //     // console.log('reqFilter');

// //     if(!req.query.age){
// //         res.send('Please eneter age');
// //     }
// //     else if(!req.query.age<18){
// //         res.send('can\'t eneter age');
// //     }
// //     else{
// //         next();//without next() we cant redirect other pages
// //     }
// //     }
   
// app.use(reqFilter)

// app.get('/',(rq,res)=>{
//     res.send('Hello this is homw page');
// });

// app.get('/users',(rq,res)=>{
//     res.send('Hello this is users page');
// });

// app.get('/Contact',(rq,res)=>{
//     res.send('Hello this is Contact us page');
// });

// app.use(reqFilter)

// app.get('/',(rq,res)=>{
//     res.send('Hello this is homw page');
// });

// app.get('/users',(rq,res)=>{
//     res.send('Hello this is users page');
// });

// app.get('/Contact',(rq,res)=>{
//     res.send('Hello this is Contact us page');
// });

// single level

// const reqFilter=(req,res,next)=>{
//     // console.log('reqFilter');

//     if(!req.query.age){
//         res.send('Please eneter age');
//     }
//     else if(req.query.age<18){
//         res.send('can\'t eneter age');
//     }
//     else{
//         next();//without next() we cant redirect other pages
//     }
//     }
   




// // app.use(reqFilter)

// app.get('/',(rq,res)=>{
//     res.send('Hello this is homw page');
// });

// app.get('/users',reqFilter,(rq,res)=>{
//     res.send('Hello this is users page');
// });

// app.get('/Contact',(rq,res)=>{
//     res.send('Hello this is Contact us page');
// });

// ==================================External Meddleware==================================


const reqFilter= require('./extmiddleware');
const route=express.Router();
route.use(reqFilter); 
app.get('/',(rq,res)=>{
    res.send('Hello this is homw page');
});

app.get('/users',reqFilter,(rq,res)=>{
    res.send('Hello this is users page');
});

route.get('/Contact',(rq,res)=>{
    res.send('Hello this is Contact us page');
});

app.use('/',route)
app.listen(5000);