const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StartingEquipmentSchema = new Schema(
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
    "starting_equipment": {
      "type": [
        "Mixed"
      ]
    },
    "choices_to_make": {
      "type": "Number"
    },
    "choice_1": {
      "type": [
        "Mixed"
      ]
    },
    "choice_2": {
      "type": [
        "Mixed"
      ]
    },
    "url": {
      "type": "String"
    }
  }
);

module.exports = mongoose.model('StartingEquipment', StartingEquipmentSchema);
