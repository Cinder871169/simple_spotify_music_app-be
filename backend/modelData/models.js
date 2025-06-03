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

const playlist1 = {
  name: "playlist 1",
  playlistId: "playlist1",
  owner: user1.spotify_id,
  tracks: [
    {
      artist: "Jessie Banks, Anthony Mode & Pat Stone",
      title: "This Is the Way",
      uri: "spotify:track:7hYcRsEuEWrt9g7dySSliH",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273299b4ba2209dc7e924121ec2",
    },
    {
      artist: "Melanie Martinez",
      title: "Play Date",
      uri: "spotify:track:4DpNNXFMMxQEKl7r0ykkWA",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b2733899712512f50a8d9e01e951",
    },
    {
      artist: "Zedd",
      title: "Beautiful Now",
      uri: "spotify:track:2ISSQPb9LHHiV6ng2NXosL",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273d040bc5b46915b49a64d7b1d",
    },
    {
      artist: "Enrique Iglesias",
      title: "Why Not Me?",
      uri: "spotify:track:1YnRzw2S56QR16zhKZJMiv",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273f6fa4a75fccc308f26c726c6",
    },
    {
      artist: "Panic! At The Disco",
      title: "House of Memories",
      uri: "spotify:track:2DgdHcjWmO3qd50RzuBLgZ",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b27323152d9337d6c57b116ed13a",
    },
  ],
};

const playlist2 = {
  name: "playlist 2",
  playlistId: "playlist2",
  owner: user1.spotify_id,
  tracks: [
    {
      artist: "Avicii",
      title: "Waiting For Love",
      uri: "spotify:track:2P4OICZRVAQcYAV2JReRfj",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b2735393c5d3cac806092a9bc468",
    },
    {
      artist: "ABBA",
      title: "Happy New Year",
      uri: "spotify:track:4AsvGVDWs16fqIiIdDzyvX",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b2734d08fc99eff4ed52dfce91fa",
    },
    {
      artist: "Rixton",
      title: "Me And My Broken Heart",
      uri: "spotify:track:1oew3nFNY3vMacJAsvry0S",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273647377a36072bd08e44dd32b",
    },
    {
      artist: "George Benson",
      title: "Nothing's Gonna Change My Love for You",
      uri: "spotify:track:0vB4Vd6PtkJSEnWsmqATnZ",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273e71efa8c6cfc1f8b39b0bdab",
    },
    {
      artist: "Tritonal",
      title: "I Feel The Love",
      uri: "spotify:track:6UiDiFJUGEDzkGpZBL8IYq",
      albumUrl:
        "https://i.scdn.co/image/1ba3fabdc667d91dc7405f3980c193e12169ac49",
    },
  ],
};

const playlist3 = {
  name: "playlist 3",
  playlistId: "playlist3",
  owner: user1.spotify_id,
  tracks: [
    {
      artist: "Thomas Gold",
      title: "Wildest Dream",
      uri: "spotify:track:3SWT9eHwRgEnVTzqE6yDiA",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b2736ec0ec119930824b1d6f74d3",
    },
    {
      artist: "The Script",
      title: "Superheroes",
      uri: "spotify:track:37sINbJZcFdHFAsVNsPq1i",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b27359d2079e141301ab89b6cbc5",
    },
    {
      artist: "Siine",
      title: "C'est La Vie (Explicit Version)",
      uri: "spotify:track:6wQYKyGePaqstYov2C1S5b",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273bab1e0f5f8bf4e2a5ae3e48c",
    },
    {
      artist: "Elephante",
      title: "Dynasty",
      uri: "spotify:track:2PSEa6CJkdwM96iLo7hkZQ",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b2730fc39f53f5ecda26696380a4",
    },
    {
      artist: "Axel Johansson",
      title: "Love How It Hurts (feat. Tina Stachowiak)",
      uri: "spotify:track:2Y6wXxB9QpckJTkFkcUY3o",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b2733e4ae05317dc082feda2a95c",
    },
  ],
};

const playlist4 = {
  name: "playlist 4",
  playlistId: "playlist4",
  owner: user1.spotify_id,
  tracks: [
    {
      artist: "Clean Bandit",
      title: "Solo (feat. Demi Lovato)",
      uri: "spotify:track:3NuK5xMlSlB6K2Qp16zf3h",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b27337fb0680110fbb107740de5d",
    },
    {
      artist: "Tritonal",
      title: "Set It On Fire",
      uri: "spotify:track:15hP47a57Z1PErM7sDNIae",
      albumUrl:
        "https://i.scdn.co/image/1ba3fabdc667d91dc7405f3980c193e12169ac49",
    },
    {
      artist: "Janji",
      title: "Horizon",
      uri: "spotify:track:2DPekI6LRM0HZiUShQiD2F",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273b607795277125a322e406ef9",
    },
    {
      artist: "The Cab",
      title: "Angel With A Shotgun",
      uri: "spotify:track:49rpdsNYJirTTf6p6mMvag",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b27351b73e24fb27b3c68159bcb3",
    },
    {
      artist: "MKTO",
      title: "Classic",
      uri: "spotify:track:6FE2iI43OZnszFLuLtvvmg",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b2739474419f15773875a495eed3",
    },
  ],
};

const playlist5 = {
  name: "Jane's Pop Hits",
  playlistId: "janes_pop_hits",
  owner: user2.spotify_id,
  tracks: [
    {
      artist: "Adele",
      title: "Rolling in the Deep",
      uri: "spotify:track:1c8gk2PeTE04A1pIDH9YMk",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273e1e6e8b6b1e7e3b7e8e8e8e8",
    },
    {
      artist: "Ed Sheeran",
      title: "Shape of You",
      uri: "spotify:track:7qiZfU4dY1lWllzX7mPBI3",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273c8e8e8e8e8e8e8e8e8e8e8e8",
    },
    {
      artist: "Dua Lipa",
      title: "Levitating",
      uri: "spotify:track:463CkQjx2Zk1yXoBuierM9",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273b8e8e8e8e8e8e8e8e8e8e8e8",
    },
    {
      artist: "Lady Gaga",
      title: "Poker Face",
      uri: "spotify:track:2nLtzopw4rPReszdYBJU6h",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273a8e8e8e8e8e8e8e8e8e8e8e8",
    },
    {
      artist: "Katy Perry",
      title: "Firework",
      uri: "spotify:track:6QgjcU0zLnzq5OrUoSZ3OK",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273d8e8e8e8e8e8e8e8e8e8e8e8",
    },
  ],
};

const playlist6 = {
  name: "Jane's Chill Vibes",
  playlistId: "janes_chill_vibes",
  owner: user2.spotify_id,
  tracks: [
    {
      artist: "Norah Jones",
      title: "Don't Know Why",
      uri: "spotify:track:3bH4HzoZZFq8UpZmI2AMgV",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273e9e9e9e9e9e9e9e9e9e9e9e9",
    },
    {
      artist: "John Mayer",
      title: "Gravity",
      uri: "spotify:track:6C6gQb7c4kqRkQfKc4QkQk",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273f9e9e9e9e9e9e9e9e9e9e9e9",
    },
    {
      artist: "Jack Johnson",
      title: "Better Together",
      uri: "spotify:track:3ebXMykcMXOcLeJ9xZ17XH",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273a9e9e9e9e9e9e9e9e9e9e9e9",
    },
    {
      artist: "Billie Eilish",
      title: "everything i wanted",
      uri: "spotify:track:3ZCTVFBt2Brf31RLEnCkWJ",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273b9e9e9e9e9e9e9e9e9e9e9e9",
    },
    {
      artist: "Lana Del Rey",
      title: "Summertime Sadness",
      uri: "spotify:track:1rqqCSm0Qe4I9rUvWncaom",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273c9e9e9e9e9e9e9e9e9e9e9e9",
    },
  ],
};

const playlist7 = {
  name: "Jane's Workout Mix",
  playlistId: "janes_workout_mix",
  owner: user2.spotify_id,
  tracks: [
    {
      artist: "Eminem",
      title: "Lose Yourself",
      uri: "spotify:track:1u8c2t2Cy7UBoG4ArRcF5g",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273d9e9e9e9e9e9e9e9e9e9e9e9",
    },
    {
      artist: "Survivor",
      title: "Eye of the Tiger",
      uri: "spotify:track:2KH16WveTQWT6KOG9Rg6e2",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273eae9e9e9e9e9e9e9e9e9e9e9",
    },
    {
      artist: "Drake",
      title: "God's Plan",
      uri: "spotify:track:6DCZcSspjsKoFjzjrWoCdn",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273bae9e9e9e9e9e9e9e9e9e9e9",
    },
    {
      artist: "Dua Lipa",
      title: "Physical",
      uri: "spotify:track:2nLtzopw4rPReszdYBJU6h",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273aae9e9e9e9e9e9e9e9e9e9e9",
    },
    {
      artist: "David Guetta",
      title: "Titanium (feat. Sia)",
      uri: "spotify:track:6QgjcU0zLnzq5OrUoSZ3OK",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273dae9e9e9e9e9e9e9e9e9e9e9",
    },
  ],
};

const playlist8 = {
  name: "Jane's Indie Gems",
  playlistId: "janes_indie_gems",
  owner: user2.spotify_id,
  tracks: [
    {
      artist: "Vance Joy",
      title: "Riptide",
      uri: "spotify:track:1rqqCSm0Qe4I9rUvWncaom",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273eaeaeaeaeaeaeaeaeaeaeaeae",
    },
    {
      artist: "Tame Impala",
      title: "The Less I Know The Better",
      uri: "spotify:track:7yCPwWs66K8Ba5lFuU2bcx",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273babababababababababababa",
    },
    {
      artist: "Arctic Monkeys",
      title: "Do I Wanna Know?",
      uri: "spotify:track:6DCZcSspjsKoFjzjrWoCdn",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273cacacacacacacacacacacaca",
    },
    {
      artist: "The 1975",
      title: "Somebody Else",
      uri: "spotify:track:2nLtzopw4rPReszdYBJU6h",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273dadadadadadadadadadadada",
    },
    {
      artist: "Florence + The Machine",
      title: "Shake It Out",
      uri: "spotify:track:6QgjcU0zLnzq5OrUoSZ3OK",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273eaeaeaeaeaeaeaeaeaeaeaea",
    },
  ],
};

const playlist9 = {
  name: "Jane's Oldies",
  playlistId: "janes_oldies",
  owner: user2.spotify_id,
  tracks: [
    {
      artist: "The Beatles",
      title: "Hey Jude",
      uri: "spotify:track:7yCPwWs66K8Ba5lFuU2bcx",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273babababababababababababa",
    },
    {
      artist: "Elvis Presley",
      title: "Can't Help Falling in Love",
      uri: "spotify:track:6DCZcSspjsKoFjzjrWoCdn",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273cacacacacacacacacacacaca",
    },
    {
      artist: "Queen",
      title: "Bohemian Rhapsody",
      uri: "spotify:track:2nLtzopw4rPReszdYBJU6h",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273dadadadadadadadadadadada",
    },
    {
      artist: "Simon & Garfunkel",
      title: "The Sound of Silence",
      uri: "spotify:track:6QgjcU0zLnzq5OrUoSZ3OK",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273eaeaeaeaeaeaeaeaeaeaeaea",
    },
    {
      artist: "The Rolling Stones",
      title: "(I Can't Get No) Satisfaction",
      uri: "spotify:track:1rqqCSm0Qe4I9rUvWncaom",
      albumUrl:
        "https://i.scdn.co/image/ab67616d0000b273eaeaeaeaeaeaeaeaeaeaeaeae",
    },
  ],
};

const playlists = [
  playlist1,
  playlist2,
  playlist3,
  playlist4,
  playlist5,
  playlist6,
  playlist7,
  playlist8,
  playlist9,
];

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

const playlistListModel = function () {
  return playlists;
};

const playlistModel = function (playlistId) {
  for (let i = 0; i < playlists.length; i++) {
    if (playlists[i].playlistId === playlistId) {
      return playlists[i];
    }
  }
  return null;
};

const models = {
  userListModel: userListModel,
  userModel: userModel,
  playlistListModel: playlistListModel,
  playlistModel: playlistModel,
};

module.exports = models;
