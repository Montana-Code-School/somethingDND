const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConditionSchema = new Schema(
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
  "url": {
    "type": "String"
  }
}
);

module.exports = mongoose.model('Condition', ConditionSchema);
