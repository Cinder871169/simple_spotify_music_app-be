const mongoose = require("mongoose");
require("dotenv").config();

const models = require("../modelData/models.js");

const User = require("../db/userModel.js");

async function dbLoad() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Successfully connected to MongoDB Atlas!");
  } catch (error) {
    console.log("Unable connecting to MongoDB Atlas!");
  }

  await User.deleteMany({});

  const userModels = models.userListModel();
  const mapFakeId2RealId = {};
  for (const user of userModels) {
    userObj = new User({
      first_name: user.first_name,
      last_name: user.last_name,
      login_name: user.login_name,
      password: user.password,
      client_id: user.client_id,
      client_secret: user.client_secret,
      spotify_id: user.spotify_id,
    });
    try {
      await userObj.save();
      mapFakeId2RealId[user._id] = userObj._id;
      user.objectID = userObj._id;
      console.log(
        "Adding user:",
        user.first_name + " " + user.last_name,
        " with ID ",
        user.objectID
      );
    } catch (error) {
      console.error("Error create user", error);
    }
  }
  mongoose.disconnect();
}

dbLoad();
