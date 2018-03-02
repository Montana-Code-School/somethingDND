const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EquipmentCategorySchema = new Schema(
  {
    "index": {
      "type": "Number"
    },
    "name": {
      "type": "String"
    },
    "equipment": {
      "type": [
        "Mixed"
      ]
    },
    "url": {
      "type": "String"
    }
  }
);

module.exports = mongoose.model('EquipmentCategory', EquipmentCategorySchema);
