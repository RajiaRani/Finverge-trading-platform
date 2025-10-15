const mongoose = require('mongoose');
const { UserSchema } = require('../schemas/UserSchema.js');

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);
module.exports = { UserModel };
