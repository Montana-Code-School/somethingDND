const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeatureSchema = new Schema(
  {
    "index": {
      "type": "Number"
    },
    "class": {
      "url": {
        "type": "String"
      },
      "name": {
        "type": "String"
      }
    },
    "subclass": {},
    "name": {
      "type": "String"
    },
    "level": {
      "type": "Number"
    },
    "desc": {
      "type": [
        "String"
      ]
    },
    "url": {
      "type": "String"
    }
  }
);

module.exports = mongoose.model('Feature', FeatureSchema);
