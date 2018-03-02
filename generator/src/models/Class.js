const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema(
  {
  "index": {
    "type": "Number"
  },
  "name": {
    "type": "String"
  },
  "hit_die": {
    "type": "Number"
  },
  "proficiency_choices": {
    "type": [
      "Mixed"
    ]
  },
  "proficiencies": {
    "type": [
      "Mixed"
    ]
  },
  "saving_throws": {
    "type": [
      "Mixed"
    ]
  },
  "starting_equipment": {
    "url": {
      "type": "String"
    },
    "class": {
      "type": "String"
    }
  },
  "class_levels": {
    "url": {
      "type": "String"
    },
    "class": {
      "type": "String"
    }
  },
  "subclasses": {
    "type": [
      "Mixed"
    ]
  },
  "spellcasting": {},
  "url": {
    "type": "String"
  }
}
);

module.exports = mongoose.model('Class', ClassSchema);
