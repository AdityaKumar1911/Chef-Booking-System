const mongoose = require('mongoose');
// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/chefbooking';


// mongoose.connect(mongoURL,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
    
// });
mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Mongoose connected to server');
});

db.on('error', (err) => {
  console.log('Mongoose connection error:', err);
});

db.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

module.exports = db;
