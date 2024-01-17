const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: String,
  userEmail: String,
  password: String,
  updatedAt: Date,
  createdAt: Date,
});

module.exports = {
  User,
};
