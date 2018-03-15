const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  race: String,
  subrace: String,
  speed: Number,
  size: String,
  languages: Array,
  traits: Array,
  racial_traits: Array,
  starting_proficiency_options: Array,
  ability_bonuses: Array,
  sub_ability_bonuses: Array,
  starting_proficiencies: Array,
  sub_starting_proficiencies: Array,
  className: String,
  subclasses: String,
  hit_die: Number,
  proficiency_choices: Array,
  proficiencies: Array,
  saving_throws: Array,
  starting_equipment: Array,
  class_levels: Object,
  features: Array,
  stat_block: Array,
})
module.exports = mongoose.model('Character', CharacterSchema);
