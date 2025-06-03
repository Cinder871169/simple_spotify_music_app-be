const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../db/userModel");
const SpotifyWebApi = require("spotify-web-api-node");
const verifyToken = require("../middlewares/verifyToken");

const secretKey = process.env.JWT_SECRET_KEY;

// Login
router.post("/login", async (req, res) => {
  const { login_name, password } = req.body;
  if (
    !login_name ||
    !password ||
    typeof login_name !== "string" ||
    typeof password !== "string" ||
    login_name.trim() === "" ||
    password.trim() === ""
  ) {
    return res.status(400).json({ error: "Invalid or missing login_name" });
  }
  try {
    const user = await User.findOne(
      { login_name },
      "_id password client_id client_secret first_name last_name spotify_id"
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    if (user.password !== password)
      return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign(
      {
        userId: user._id,
        login_name: user.login_name,
        spotify_id: user.spotify_id,
      },
      secretKey,
      { expiresIn: "1h" }
    );

    const response = {
      token,
      user: {
        id: user._id,
        login_name: user.login_name,
        first_name: user.first_name,
        last_name: user.last_name,
        client_id: user.client_id,
        client_secret: user.client_secret,
        spotify_id: user.spotify_id,
        type: user.type,
      },
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
});

// Logout
router.post("/logout", verifyToken, (req, res) => {
  res.status(200).json({ message: "Logout successful" });
});

// Xác thực người dùng với Spotify
router.post("/authenticate", verifyToken, async (req, res) => {
  const code = req.body.code;
  const userId = req.user.userId;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    const spotifyApi = new SpotifyWebApi({
      redirectUri: process.env.REDIRECT_URI,
      clientId: user.client_id,
      clientSecret: user.client_secret,
    });

    spotifyApi
      .authorizationCodeGrant(code)
      .then((data) => {
        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
          spotify_id: user.spotify_id,
          first_name: user.first_name,
          last_name: user.last_name,
        });
      })
      .catch((err) => {
        console.error("Error during authorization code grant:", err);
        res.status(500).json({ error: "Spotify authorization failed" });
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
