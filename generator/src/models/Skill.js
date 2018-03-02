const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = new Schema(
  {
    "index": {
      "type": "Number"
    },
    "name": {
      "type": "String"
    },
    "desc": {
      "type": [
        "String"
      ]
    },
    "ability_score": {
      "url": {
        "type": "String"
      },
      "name": {
        "type": "String"
      }
    },
    "url": {
      "type": "String"
    }
  }
);

module.exports = mongoose.model('Skill', SkillSchema);
