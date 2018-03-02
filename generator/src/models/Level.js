const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LevelSchema = new Schema(

  {
    "level": {
      "type": "Number"
    },
    "ability_score_bonuses": {
      "type": "Number"
    },
    "prof_bonus": {
      "type": "Number"
    },
    "feature_choices": {
      "type": "Array"
    },
    "features": {
      "type": [
        "Mixed"
      ]
    },
    "class_specific": {
      "rage_count": {
        "type": "Number"
      },
      "rage_damage_bonus": {
        "type": "Number"
      },
      "brutal_critical_dice": {
        "type": "Number"
      }
    },
    "index": {
      "type": "Number"
    },
    "class": {
      "name": {
        "type": "String"
      },
      "url": {
        "type": "String"
      }
    },
    "subclass": {},
    "url": {
      "type": "String"
    }
  }
);

module.exports = mongoose.model('Level', LevelSchema);
