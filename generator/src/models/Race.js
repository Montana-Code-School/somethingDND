const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RaceSchema = new Schema(
  {
    "index": {
      "type": "Number"
    },
    "name": {
      "type": "String"
    },
    "speed": {
      "type": "Number"
    },
    "ability_bonuses": {
      "type": [
        "Number"
      ]
    },
    "alignment": {
      "type": "String"
    },
    "age": {
      "type": "String"
    },
    "size": {
      "type": "String"
    },
    "size_description": {
      "type": "String"
    },
    "starting_proficiencies": {
      "type": [
        "Mixed"
      ]
    },
    "starting_proficiency_options": {
      "choose": {
        "type": "Number"
      },
      "type": {
        "type": "String"
      },
      "from": {
        "type": [
          "Mixed"
        ]
      }
    },
    "languages": {
      "type": [
        "Mixed"
      ]
    },
    "language_options": {},
    "language_desc": {
      "type": "String"
    },
    "traits": {
      "type": [
        "Mixed"
      ]
    },
    "subraces": {
      "type": [
        "Mixed"
      ]
    },
    "url": {
      "type": "String"
    }
  }
);

module.exports = mongoose.model('Race', RaceSchema);
