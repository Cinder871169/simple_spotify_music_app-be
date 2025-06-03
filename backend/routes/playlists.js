const express = require("express");
const router = express.Router();
const Playlist = require("../db/playlistModel");

// Lấy danh sách các playlist của người dùng
router.get("/", async (req, res) => {
  try {
    const playlists = await Playlist.find({ owner: req.user.spotify_id });
    res.status(200).json(playlists);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch playlists" });
  }
});

// Lấy thông tin một playlist theo ID
router.get("/:playlistId", async (req, res) => {
  try {
    const playlist = await Playlist.findOne({
      playlistId: req.params.playlistId,
    });
    if (!playlist) {
      return res.status(404).json({ error: "Playlist not found" });
    }
    res.status(200).json(playlist);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch playlist" });
  }
});

// Tạo một playlist mới
router.post("/", async (req, res) => {
  try {
    const { name, playlistId, tracks } = req.body;
    if (!name || !playlistId) {
      return res.status(400).json({ error: "Missing name or playlistId" });
    }
    const playlist = new Playlist({
      name,
      playlistId,
      owner: req.user.spotify_id,
      tracks: tracks || [],
    });
    await playlist.save();
    res.status(201).json(playlist);
  } catch (error) {
    res.status(500).json({ error: "Failed to create playlist" });
  }
});

// Thêm một track vào playlist
router.post("/:playlistId/tracks", async (req, res) => {
  try {
    const { tracks } = req.body;
    if (!Array.isArray(tracks) || tracks.length === 0) {
      return res.status(400).json({ error: "No tracks provided" });
    }
    const playlist = await Playlist.findOne({
      playlistId: req.params.playlistId,
      owner: req.user.spotify_id,
    });
    if (!playlist) {
      return res.status(404).json({ error: "Playlist not found" });
    }
    playlist.tracks.push(...tracks);
    await playlist.save();
    res.status(200).json(playlist);
  } catch (error) {
    res.status(500).json({ error: "Failed to add tracks" });
  }
});

// Xóa một track khỏi playlist
router.delete("/:playlistId/tracks", async (req, res) => {
  try {
    const { uri } = req.body;
    if (!uri) {
      return res.status(400).json({ error: "Missing track uri" });
    }
    const playlist = await Playlist.findOne({
      playlistId: req.params.playlistId,
      owner: req.user.spotify_id,
    });
    if (!playlist) {
      return res.status(404).json({ error: "Playlist not found" });
    }
    playlist.tracks = playlist.tracks.filter((track) => track.uri !== uri);
    await playlist.save();
    res.status(200).json(playlist);
  } catch (error) {
    res.status(500).json({ error: "Failed to remove track" });
  }
});

// Xóa một playlist
router.delete("/:playlistId", async (req, res) => {
  try {
    const playlist = await Playlist.findOneAndDelete({
      playlistId: req.params.playlistId,
      owner: req.user.spotify_id,
    });
    if (!playlist) {
      return res.status(404).json({ error: "Playlist not found" });
    }
    res.status(200).json({ message: "Playlist deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete playlist" });
  }
});

module.exports = router;
