const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Users', UserSchema);
