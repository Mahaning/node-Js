const express=require("express");
const EventEmitter=require('events');

const app=express();
const event=new EventEmitter();

let c=0;

event.on("CountApi",()=>{
    c++;
    console.log("Event called",c)
})


app.get("/",(req,res)=>{
    res.send("api called");
    event.emit("CountApi")
});

app.get("/search",(req,res)=>{
    res.send("api called");
    event.emit("CountApi")
});

app.get("/update",(req,res)=>{
    res.send("api called");
    event.emit("CountApi")
});

app.listen(5000)