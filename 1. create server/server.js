const http=require('http');

// function datacontrol(req,res){
//     res.write("<h1>HI hello How are You");
//     res.end();
// }

// // ============================Using  Functions=================================

// http.createServer(datacontrol).listen(4500);

//-------------Normal method-------------------------
// http.createServer((req,res)=>{
//     res.write("<h1>Hello this my 1st server.</h1>");
//     console.log("server is started at localhost port no :4500");
//     res.end();
// }).listen(4500);


//===================using Arrow functions=====================
const datacontrol=((req,res)=>{
        res.write("<h1>HI hello How are You\n Iam using arrow functuion");
        res.end();
    })
    
    // // ============================Using  Functions=================================
    
    http.createServer(datacontrol).listen(4500);


