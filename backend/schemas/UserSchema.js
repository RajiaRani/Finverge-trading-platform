// backend/schemas/UserSchema.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    email:    { type: String, required: true, unique: true, trim: true, lowercase: true },
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true }, // store HASH, not plain text
  },
  { timestamps: true }
);

// Helpful unique indexes
UserSchema.index({ email: 1 }, { unique: true });
UserSchema.index({ username: 1 }, { unique: true });

module.exports = { UserSchema };
