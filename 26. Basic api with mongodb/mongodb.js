const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';

const dbName = 'myProject';

async function dbConection() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    return db.collection('datata');


}

module.exports=dbConection