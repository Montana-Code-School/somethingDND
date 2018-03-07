const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema(
{
  race: String,
  subrace: String,
  speed: Number,
  size: String,
  languages: Array,
  traits: Array, 
}
)
module.exports = mongoose.model('Character', CharacterSchema);
