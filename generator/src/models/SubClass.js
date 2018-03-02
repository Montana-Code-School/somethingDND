const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubClassSchema = new Schema(
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
    "name": {
      "type": "String"
    },
    "subclass_flavor": {
      "type": "String"
    },
    "desc": {
      "type": [
        "String"
      ]
    },
    "features": {
      "type": [
        "Mixed"
      ]
    },
    "url": {
      "type": "String"
    }
  }
);

module.exports = mongoose.model('SubClass', SubClassSchema);
