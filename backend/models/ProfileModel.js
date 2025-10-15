const { Schema, model } = require("mongoose");

const ProfileSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user", unique: true, required: true },
    displayName: { type: String, default: "" },
    avatarUrl: { type: String, default: "" },
    // add any defaults you want available right after signup
  },
  { timestamps: true }
);

const ProfileModel = model("profile", ProfileSchema);
module.exports = { ProfileModel };