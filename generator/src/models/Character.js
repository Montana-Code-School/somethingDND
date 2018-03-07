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
  starting_proficiency_options: Array,
  ability_bonuses: Array,
  starting_proficiencies: Array,
}
)
module.exports = mongoose.model('Character', CharacterSchema);
