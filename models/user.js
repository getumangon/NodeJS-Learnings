const mongoose = require("mongoose");

// USER Schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

// MODEL
const User = mongoose.model("user", userSchema);

module.exports = {
  User,
};
