const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MonsterSchema = new Schema(
  {
    "index": {
      "type": "Number"
    },
    "name": {
      "type": "String"
    },
    "size": {
      "type": "String"
    },
    "type": {
      "type": "String"
    },
    "subtype": {
      "type": "String"
    },
    "alignment": {
      "type": "String"
    },
    "armor_class": {
      "type": "Number"
    },
    "hit_points": {
      "type": "Number"
    },
    "hit_dice": {
      "type": "String"
    },
    "speed": {
      "type": "String"
    },
    "strength": {
      "type": "Number"
    },
    "dexterity": {
      "type": "Number"
    },
    "constitution": {
      "type": "Number"
    },
    "intelligence": {
      "type": "Number"
    },
    "wisdom": {
      "type": "Number"
    },
    "constitution_save": {
      "type": "Number"
    },
    "intelligence_save": {
      "type": "Number"
    },
    "wisdom_save": {
      "type": "Number"
    },
    "history": {
      "type": "Number"
    },
    "perception": {
      "type": "Number"
    },
    "damage_vulnerabilities": {
      "type": "String"
    },
    "damage_resistances": {
      "type": "String"
    },
    "damage_immunities": {
      "type": "String"
    },
    "condition_immunities": {
      "type": "String"
    },
    "senses": {
      "type": "String"
    },
    "languages": {
      "type": "String"
    },
    "challenge_rating": {
      "type": "Number"
    },
    "special_abilities": {
      "type": [
        "Mixed"
      ]
    },
    "actions": {
      "type": [
        "Mixed"
      ]
    },
    "legendary_actions": {
      "type": [
        "Mixed"
      ]
    },
    "url": {
      "type": "String"
    }
  }
);

module.exports = mongoose.model('Monster', MonsterSchema);
