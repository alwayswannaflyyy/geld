const mongoose = require("mongoose");

const Record = mongoose.model("Record", {
  user: mongoose.Schema.Types.ObjectId,
  amount: String,
  date: Date,
  isExpense: Boolean,
  selectedCategory: String,
  time: String,
  IconColor: String,
  selectedIcon: String,
  userEmail: String,
});

module.exports = {
    Record,
};
