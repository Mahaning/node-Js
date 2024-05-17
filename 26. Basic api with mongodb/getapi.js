const express = require('express');
const dbConnection = require('./mongodb');
const app = express(); 

app.get('/', async (req, res) => {
    let data=await dbConnection();
    data=await data.find().toArray();
    console.log(data)
    res.send(data);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
