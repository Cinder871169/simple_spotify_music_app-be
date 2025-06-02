const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const SpotifyWebApi = require("spotify-web-api-node");
const dbConnect = require("./db/dbConnect");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("./db/userModel");

const secretKey = process.env.JWT_SECRET_KEY;

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (typeof authHeader !== "undefined") {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({ message: "Unauthorized: Token missing" });
  }
}

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", async (req, res) => {
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

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        login_name: user.login_name,
      },
      secretKey,
      {
        expiresIn: "1h",
      }
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

app.post("/logout", verifyToken, (req, res) => {
  res.status(200).json({ message: "Logout successful" });
});

// Authentication API
app.post("/authenticate", verifyToken, async (req, res) => {
  const code = req.body.code;

  // Get user info from the verified JWT
  const userId = req.user.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Initialize Spotify API with user's client info
    const spotifyApi = new SpotifyWebApi({
      redirectUri: process.env.REDIRECT_URI,
      clientId: user.client_id,
      clientSecret: user.client_secret,
    });

    // Get access token from Spotify
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

dbConnect();

// Khởi động server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
