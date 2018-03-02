const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProficiencySchema = new Schema(
  {
    "index": {
      "type": "Number"
    },
    "type": {
      "type": "String"
    },
    "name": {
      "type": "String"
    },
    "classes": {
      "type": [
        "Mixed"
      ]
    },
    "races": {
      "type": "Array"
    },
    "url": {
      "type": "String"
    }
  }
);

module.exports = mongoose.model('Proficiency', ProficiencySchema);
