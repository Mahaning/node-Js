console.log("start exe....");
var a=10;
var b=0;
setTimeout(()=>{
    console.log("logic exe ....");
},2000);



setTimeout(()=>{
    b=20
},2000);
console.log(a+b);