const mongoose = require('mongoose');
require('dotenv').config();

const initDB = () => {
  mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });
};

module.exports = initDB;
