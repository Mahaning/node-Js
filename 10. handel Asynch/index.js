const { rejects } = require("assert");
const { resolve } = require("path");

console.log("start exe....");
var a=10;
var b=0;
setTimeout(()=>{
    console.log("logic exe ....");
},2000);

let waitingData= new Promise((resolve,rejects)=>{
    setTimeout(()=>{
        // b=20
        resolve(20);
    },2000);

})


waitingData.then((data)=>{
    b=data;
    console.log(a+b);
});
