const dbConnection = require('./mongodb');

const insertData = async () => {
  const client = await dbConnection();

  const dbName = 'myProject';
  const collectionName = 'datata';

  try {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.deleteOne({name:"ram"});

    if (result.acknowledged) {
      console.log(`Data deleted and deleted count :${result.deletedCount}`);
    }
  } catch (error) {
    console.error("Error inserting data:", error);
  }
  // The connection will be automatically closed when the Node.js process exits
};

insertData();
