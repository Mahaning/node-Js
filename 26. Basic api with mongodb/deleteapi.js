const express = require('express');
const dbConnection = require('./mongodb');
const mongoDb=require('mongodb');
const app = express(); 

app.use(express.json());

app.get('/', async (req, res) => {
    let data=await dbConnection();
    data=await data.find().toArray();
    console.log(data)
    res.send(data);
});

app.delete('/:id', async (req, res) => {
    
    console.log(req.params.id);
    let data=await dbConnection();
    data=await data.deleteOne(
        {_id:new mongoDb.ObjectId(req.params.id)}
        );
    res.send(data);
    console.log(req.body)
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

