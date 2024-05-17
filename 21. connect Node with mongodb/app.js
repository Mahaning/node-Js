const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'myProject';

async function getData() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  // try {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    const collection = db.collection('datata');

    let response = await collection.find({}).toArray();
    console.log(response);
  // } finally {
  //   // Close the connection when done
  //   await client.close();
  // }
}

getData();
