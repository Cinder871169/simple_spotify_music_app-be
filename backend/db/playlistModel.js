const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  playlistId: { type: String, required: true, unique: true },
  owner: { type: String, required: true },
  tracks: [
    {
      artist: String,
      title: String,
      uri: String,
      albumUrl: String,
    },
  ],
});

module.exports = mongoose.model("Playlist", playlistSchema);
