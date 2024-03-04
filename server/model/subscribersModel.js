import mongoose from "mongoose";

const subscribersSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 30,
    },
  },
  {
    timestamps: true,
  }
);

const subscribersModel = mongoose.model("Subscribers", subscribersSchema);
export { subscribersModel };
