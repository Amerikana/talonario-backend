const {connect, connection, set} = require('mongoose');

async function dbConnect() {
  try {
    const dbUri = process.env.MONGODB_URI;
    set('strictQuery', false);
    const db = await connect(dbUri);
    console.log(`connected to ${db.connection.name}`);
  } catch (error) {
    throw error;
  }

  connection.on('connected', () => {
    console.log('Mongoose is connected');
  });

  connection.on('disconnected', () => {
    console.log('Mongoose is disconnected');
  });
}

dbConnect();
