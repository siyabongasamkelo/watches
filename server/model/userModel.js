import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 30,
    },
    email: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 30,
    },
    password: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 100,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
