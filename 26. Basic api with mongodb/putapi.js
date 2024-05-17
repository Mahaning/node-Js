const express = require('express');
const dbConnection = require('./mongodb');
const app = express(); 

app.use(express.json());

app.get('/', async (req, res) => {
    let data=await dbConnection();
    data=await data.find().toArray();
    console.log(data)
    res.send(data);
});

app.put('/', async (req, res) => {
    
    console.log(req.body);
    let data=await dbConnection();
    data=await data.updateOne(
        {email:req.body.email},{$set:req.body}
    );
    
    res.send({Result:"data"});
    console.log(req.body)
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

