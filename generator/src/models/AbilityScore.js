const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AbilityScoreSchema = new Schema({
  "index": {
    "type": "Number"
  },
  "name": {
    "type": "String"
  },
  "full_name": {
    "type": "String"
  },
  "desc": {
    "type": [
      "String"
    ]
  },
  "skills": {
    "type": [
      "Mixed"
    ]
  },
  "url": {
    "type": "String"
  }
});

module.exports = mongoose.model('AbilityScore', AbilityScoreSchema);
