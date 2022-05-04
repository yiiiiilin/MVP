const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/MVP')
  .then(() => {
    console.log('MongoDB is running')
  })
  .catch((err) => {
    console.log(err);
  });

let schema = mongoose.Schema({
  name: String,
  message: String,
  time: String,
});

let Message = mongoose.model('message', schema);

module.exports = Message;