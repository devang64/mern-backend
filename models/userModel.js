const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Enter Your Name"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    enum: [1, 2],
    default: 2
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);