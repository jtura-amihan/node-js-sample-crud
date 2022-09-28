const mongoose = require("mongoose");

const UserList = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
});

const User = mongoose.model("User", UserList);

module.exports = User;