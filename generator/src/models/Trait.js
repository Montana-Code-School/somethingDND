const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TraitSchema = new Schema(
  {
  "index": {
    "type": "Number"
  },
  "name": {
    "type": "String"
  },
  "race": {
    "url": {
      "type": "String"
    },
    "name": {
      "type": "String"
    }
  },
  "desc": {
    "type": "String"
  },
  "ability_bonuses": {
    "type": [
      "Number"
    ]
  },
  "starting_proficiencies:": {
    "type": "Array"
  },
  "starting_proficiency_options": {},
  "languages": {
    "type": "Array"
  },
  "language_options": {},
  "racial_traits": {
    "type": [
      "Mixed"
    ]
  },
  "racial_trait_options": {},
  "url": {
    "type": "String"
  }
}
);

module.exports = mongoose.model('Trait', TraitSchema);
