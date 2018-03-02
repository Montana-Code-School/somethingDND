const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpellSchema = new Schema(
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
    "higher_level": {
      "type": [
        "String"
      ]
    },
    "page": {
      "type": "Date"
    },
    "range": {
      "type": "String"
    },
    "components": {
      "type": [
        "String"
      ]
    },
    "material": {
      "type": "String"
    },
    "ritual": {
      "type": "String"
    },
    "duration": {
      "type": "String"
    },
    "concentration": {
      "type": "String"
    },
    "casting_time": {
      "type": "String"
    },
    "level": {
      "type": "Number"
    },
    "school": {
      "url": {
        "type": "String"
      },
      "name": {
        "type": "String"
      }
    },
    "classes": {
      "type": [
        "Mixed"
      ]
    },
    "subclasses": {
      "type": [
        "Mixed"
      ]
    },
    "url": {
      "type": "String"
    }
  }
);

module.exports = mongoose.model('Spell', SpellSchema);
