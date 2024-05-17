//ex call stack
console.log("starting up");

setTimeout(()=>{
    console.log("2sec");
},2000);

setTimeout(()=>{
    console.log("0 sec");
},0);

console.log("finishing up");