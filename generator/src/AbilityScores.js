const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AbilityScoresSchema = new Schema({
  index: Number,
  name: String,
  full_name: String,
  desc: Array,
  skills: Array,
  url: String
});

module.exports = mongoose.model('AbilityScores', AbilityScoresSchema);
