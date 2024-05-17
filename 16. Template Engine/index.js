const express= require ('express');
const path=require('path');
const app = express(); 

const publicpath=path.join(__dirname,'views');

app.set('view engine','ejs');
// app.use(express.static(publicpath))

app.get('',(rq,res)=>{
    res.sendFile(`${publicpath}/index.html`);
});


app.get('/profile',(req,res)=>{
    const user={
                name:"maha",
                email:'abc@gmai.com',
            }
    res.render('profile',{user});
})

// app.get('/about',(rq,res)=>{
//     const user={
//         name:"maha",
//         email:'abc@gmai.com',
//     }
//     res.sendFile(`${publicpath}/index.html`);
// });

// app.get('/profile',(rq,res)=>{
//     res.render('profile');
// });

// app.get('*',(rq,res)=>{
//     res.sendFile(`${publicpath}/404page.html`);
// });

app.listen(5000);