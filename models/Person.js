var mongoose = require('mongoose');

const personSchema = mongoose.Schema({
  name: String,
  mobile: String,
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
