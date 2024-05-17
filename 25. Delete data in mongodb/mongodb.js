const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'myProject';

async function dbConnection() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  console.log('Connected successfully to server');

  return client; // Return the MongoClient object directly
}

module.exports = dbConnection;
