const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const SpotifyWebApi = require("spotify-web-api-node");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Login API
app.post("/login", (req, res) => {
  const code = req.body.code;

  // Khởi tạo API Spotify với thông tin client
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  });

  // Lấy token truy cập
  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      console.error("Error during authorization code grant:", err);
    });
});

// Refresh token API
app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  console.log("Received refresh token:", refreshToken);

  // Khởi tạo API Spotify với thông tin client và refresh token
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://127.0.0.1:3000/callback",
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  });

  // Lấy token truy cập mới
  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

// API tim kiếm lời bài hát
app.get("/lyrics", async (req, res) => {
  // Lây artist và title từ query parameters
  const { artist, title } = req.query;

  if (!artist || !title) {
    return res.status(400).json({ error: "Missing artist or title" });
  }
  try {
    const response = await fetch(
      // Gọi API lyrics.ovh để lấy lời bài hát
      `https://api.lyrics.ovh/v1/${artist}/${title}`
    );
    if (!response.ok) throw new Error("Lyrics not found");

    const data = await response.json();
    res.json({ lyrics: data.lyrics });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Khởi động server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
