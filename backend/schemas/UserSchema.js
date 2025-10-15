const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    email:    { type: String, required: true, unique: true, lowercase: true, trim: true },
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true }, // hashed
  },
  { timestamps: true }
);

module.exports = { UserSchema };
