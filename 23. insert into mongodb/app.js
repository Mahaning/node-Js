const dbConnection = require('./mongodb');

const insertData = async () => {
  const client = await dbConnection();

  const dbName = 'myProject';
  const collectionName = 'datata';

  try {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const dataToInsert = { "email": "admin1@gmail.com", "name": "deep" };

    const result = await collection.insertOne(dataToInsert);

    if (result.acknowledged) {
      console.log("Data inserted");
    }
  } catch (error) {
    console.error("Error inserting data:", error);
  }
  // The connection will be automatically closed when the Node.js process exits
};

insertData();
