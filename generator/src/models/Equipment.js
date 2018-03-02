const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EquipmentSchema = new Schema(
  {
    "index": {
      "type": "Number"
    },
    "name": {
      "type": "String"
    },
    "equipment_category": {
      "type": "String"
    },
    "weapon_category:": {
      "type": "String"
    },
    "weapon_range": {
      "type": "String"
    },
    "category_range": {
      "type": "String"
    },
    "cost": {
      "quantity": {
        "type": "Number"
      },
      "unit": {
        "type": "String"
      }
    },
    "damage": {
      "dice_count": {
        "type": "Number"
      },
      "dice_value": {
        "type": "Number"
      },
      "damage_type": {
        "url": {
          "type": "String"
        },
        "name": {
          "type": "String"
        }
      }
    },
    "range": {
      "normal": {
        "type": "Number"
      },
      "long": {
        "type": "Mixed"
      }
    },
    "weight": {
      "type": "Number"
    },
    "properties": {
      "type": [
        "Mixed"
      ]
    },
    "url": {
      "type": "String"
    }
  }
);

module.exports = mongoose.model('Equipment', EquipmentSchema);
