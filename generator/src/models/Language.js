const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LanguageSchema = new Schema(

  {
    "index": {
      "type": "Number"
    },
    "name": {
      "type": "String"
    },
    "type": {
      "type": "String"
    },
    "typical_speakers": {
      "type": [
        "String"
      ]
    },
    "script": {
      "type": "String"
    },
    "url": {
      "type": "String"
    }
  }
);

module.exports = mongoose.model('Language', LanguageSchema);
