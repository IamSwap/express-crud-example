require('dotenv/config');

var mongoose = require('mongoose');

const con = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = con;
