const user1 = {
  first_name: "John",
  last_name: "Doe",
  login_name: "user1",
  password: "1234",
  client_id: "86f9551bfda34e3aa2a46e8ae30c8dee",
  client_secret: "baa3af6c326d4849a5f8cfdd34ba2860",
  spotify_id: "3g92uxczdmrvmf5dmzup2hpz8",
};

const user2 = {
  first_name: "Jane",
  last_name: "Smith",
  login_name: "user2",
  password: "1234",
  client_id: "0accecfec2364422b18edfb2e102b218",
  client_secret: "86f6fff059ab45e79fa1b3f4bdc325e9",
  spotify_id: "31zfn7ppeyhsabwgyfgzebnyabyq",
};

const users = [user1, user2];

const userListModel = function () {
  return users;
};

const userModel = function (userId) {
  for (let i = 0; i < users.length; i++) {
    if (users[i]._id === userId) {
      return users[i];
    }
  }
  return null;
};

const models = {
  userListModel: userListModel,
  userModel: userModel,
};

module.exports = models;
