const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Database', DataSchema);
