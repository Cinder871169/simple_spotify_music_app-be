const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConnect = require("./db/dbConnect");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const verifyToken = require("./middlewares/verifyToken");

const authRoutes = require("./routes/auth");
const playlistRoutes = require("./routes/playlists");
const lyricsRoutes = require("./routes/lyrics");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to DB
dbConnect();

// Auth routes (login, logout, authenticate)
app.use("/", authRoutes);

// Playlist routes
app.use("/playlists", verifyToken, playlistRoutes);

// Lyrics route
app.use("/lyrics", lyricsRoutes);

// Start server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
