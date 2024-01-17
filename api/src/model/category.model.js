const mongoose = require("mongoose");

const Category = mongoose.model("Category", {
  user: mongoose.Schema.Types.ObjectId,
  categoryName: String,
  IconColor: String,
  selectedIcon: String,
  userEmail: String,
  Date: Date,
});

module.exports = {
  Category,
};
