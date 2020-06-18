var mongoose = require('mongoose');

const con = () => {
  return mongoose.connect('mongodb://localhost:27017/contacts', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = con;
