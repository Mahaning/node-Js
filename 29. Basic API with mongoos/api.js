const express=require('express');
require('./config');

const Products=require('./product');

const app=express();
app.use(express.json())
app.post('/create',async (req,res)=>{
    let data=new Products(req.body)
    let result=await data.save();
    console.log(result)
    res.send("Done")
})

app.get('/list',async (req,res)=>{
    let data= await Products.find();
    res.send(data)
    console.log(data)
    res.send("Done")
})

app.delete('/delete/:_id',async (req,res)=>{
    let data= await Products.deleteOne(req.params);
    // res.send(data)
    console.log(req.params)
    res.send("Done")
})

app.put('/update/:_id',async (req,res)=>{
    let data= await Products.updateOne(
        req.params,{$set:req.body}
    );
    // res.send(data)
    console.log(req.body)
    res.send("Done")
})



app.listen(5000)