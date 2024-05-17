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

app.post('/', async (req, res) => {
    
    // data=await data.find().toArray();
    console.log(req.body);
    let data=await dbConnection();
    data=await data.insertMany(req.body);
    
    res.send({data:"data"});
    console.log("updated")
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

