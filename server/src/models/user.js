const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  saved: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  profilePhoto: { type: String, default: "photo" },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
