const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpellCastingSchema = new Schema(
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
    "level": {
      "type": "Number"
    },
    "spellcasting_ability": {
      "url": {
        "type": "String"
      },
      "name": {
        "type": "String"
      }
    },
    "info": {
      "type": [
        "Mixed"
      ]
    },
    "url": {
      "type": "String"
    }
  }
);

module.exports = mongoose.model('SpellCasting', SpellCastingSchema);
