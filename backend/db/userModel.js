const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  login_name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  client_id: { type: String, required: true },
  client_secret: { type: String, required: true },
  spotify_id: { type: String, unique: true },
});

module.exports = mongoose.model.Users || mongoose.model("Users", userSchema);
