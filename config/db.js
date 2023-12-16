const mongoose = require('mongoose');
const DB_URL = process.env.MONGODB_URL
const connect = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log('mongoDb connected successfully');
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
// connect()
